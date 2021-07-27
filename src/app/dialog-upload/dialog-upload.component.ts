import { Component, OnInit } from "@angular/core";
import { AssetDetailService } from "../asset-detail.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogUploadStatusComponent } from "../dialog-upload-status/dialog-upload-status.component";

@Component({
  selector: "app-dialog-upload",
  templateUrl: "./dialog-upload.component.html",
  styleUrls: ["./dialog-upload.component.scss"],
})
export class DialogUploadComponent implements OnInit {
  //succ:boolean=false;
  fileName: any;
  msg: any;
  showSpinner = false;
  isActive: boolean = false;

  constructor(
    private _assetDetailService: AssetDetailService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogUploadComponent>
  ) {}

  ngOnInit(): void {}

  openDialog(succ: boolean) {
    this.dialog.open(DialogUploadStatusComponent, {
      data: { succ: succ, fileName: this.fileName, msg: this.msg },
    });
  }

  onFileSelected(event: any) {
    this.showSpinner = true;
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append("formFile", selectedFile);
    // console.log(selectedFile);
    this.fileName = selectedFile.name;
    // console.log(this.fileName);
    this._assetDetailService.postExcelData(formData).subscribe(
      (response) => {
        // console.log(response,response.type);
          this.downloadFn(response);
        this.showSpinner = false;
        this.openDialog(true);
      },
      (error) => {
        this.msg = `Could not upload ${this.fileName}`;
        console.log(error);
        this.showSpinner = false;
        this.openDialog(false);
      }
    );

    //for importing same file twice
    //this.myFileInput.nativeElement.value='';
  }
  closeDialog() {
    this.dialogRef.close(true);
  }

  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.isActive = true;
    // console.log("Drag over");
  }

  onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.isActive = false;
    // console.log("Drag leave");
  }

  onDrop(event: any) {
    // console.log("drop leave");
    event.preventDefault();
    event.stopPropagation();
    this.showSpinner = true;
    const selectedFile = event.dataTransfer.files[0];
    const formData = new FormData();
    formData.append("formFile", selectedFile);
    console.log(selectedFile);
    this.fileName = selectedFile.name;
    // console.log(this.fileName);
    this._assetDetailService.postExcelData(formData).subscribe(
      (data) => {
        this.downloadFn(data);
        this.showSpinner = false;
        this.openDialog(true);
      },
      (error) => {
        this.msg = "Could not upload  " + this.fileName;
        console.log(error);
        this.showSpinner = false;
        this.openDialog(false);
      }
    );
    this.isActive = false;
  }
  onClick() {
    let url="";
    // console.log("1");
    this._assetDetailService.downloadTemplate().subscribe((data)=>{
      console.log(data);
      url=data.data;
      window.open(url);
    });
    // let url =
    //   "https://firebasestorage.googleapis.com/v0/b/assetmanagementsystem-d0b24.appspot.com/o/AMS_InternProjectTemplate.xlsx?alt=media&token=285fca8a-878a-4799-803a-d04575cfdc8d";
  }
  downloadFn(response: any) {
    if (response.type === "application/json") {
      this.msg = "All entries have been inserted successfully!";
    }else{ 
    this.msg =
      "One or more rows have not been inserted. Check the downloaded excel sheet for faulty entries.";
    let filename = "AMS-Faulty-Entries";
    let dataType = response.type;
    let binaryData: any = [];
    binaryData.push(response);
    let downloadLink = document.createElement("a");
    downloadLink.href = window.URL.createObjectURL(
      new Blob(binaryData, { type: dataType })
    );
    if (filename) {
      downloadLink.setAttribute("download", filename);
    }
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }
}
}
