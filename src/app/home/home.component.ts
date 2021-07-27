import { Component, OnInit, ViewChild } from "@angular/core";
import { IAssetDetail, ITotalAssetDetail } from "../asset-detail";
import { AssetDetailService } from "../asset-detail.service";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
import { DialogUploadComponent } from "../dialog-upload/dialog-upload.component";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    "projectName",
    "category",
    "manufacturer",
    "name",
    "description",
    "mlfb",
    "workingCondition",
    "remarks",
    "actions",
  ];

  rowId: string = "";
  dataSource:MatTableDataSource<IAssetDetail>= new MatTableDataSource();
  elementData:IAssetDetail[]=[];
  totalData:ITotalAssetDetail={pages:1,currPage:1,data:[]};
  public pageNo=1;
  public selectedOption=6;
  public pageSize:string="6";

  @ViewChild(MatSort) sort!:MatSort;

  constructor(
    private _assetDetailService: AssetDetailService,
    private router: Router,
    public dialog:MatDialog
  ) {}

  nextPage(){
    this.pageNo++;
    // console.log(this.pageNo);
    this.refresh(this.pageNo,this.pageSize);
  }
  prevPage(){
    this.pageNo--;
    // console.log(this.pageNo);
    this.refresh(this.pageNo,this.pageSize);
  }

  onChange(value){
    this.pageSize = value;
    // console.log(this.pageSize);
    this.pageNo=1;
    this.refresh(this.pageNo,this.pageSize);
  }

  openDialog(){
    let dialogRef =this.dialog.open(DialogUploadComponent);
    dialogRef.afterClosed().subscribe(result=>{
      // console.log(result);
      this.refresh(this.pageNo,this.pageSize);
    });
  }

  makeSubscription(page:number,pageSize:string){
    
    this._assetDetailService.getAssetData(page,pageSize).subscribe((data) => {
      this.totalData=data;
      this.elementData = data.data;
      this.dataSource.data =this.elementData;
      // console.log(data);
    });
  }
  ngOnInit(): void {
    this.makeSubscription(1,this.pageSize);
    // this.refresh(this.pageNo,this.pageSize);
  }

  ngAfterViewInit(){
    this.dataSource.sort=this.sort; 
  }

  refresh(page:number,pageSize:string){
   this.makeSubscription(page,pageSize);
  }

  getId(data: string) {
    this.rowId = data;
    // console.log(this.rowId);
  }
  goToForms() {
    this.router.navigate(["/asset-form", { id: this.rowId }]);
  }
  
  exportButton(){
   this._assetDetailService.exportAsset().subscribe((response:any)=>{
     console.log(response);
     let filename="Assets-List";
     let dataType=response.type;
     let binaryData:any=[];
     binaryData.push(response);
     let downloadLink = document.createElement('a');
     downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: dataType }));
     if (filename) {
       downloadLink.setAttribute('download', filename);
     }
     document.body.appendChild(downloadLink);
     downloadLink.click();
   })
  }
deleteAllAssets(){
  this._assetDetailService.deleteAllAssets().subscribe((data)=>this.refresh(this.pageNo,this.pageSize));
}

}
