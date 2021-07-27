import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProjectName } from "../asset-detail";
import { AssetDetailService } from "../asset-detail.service";
import { FormData } from "../form-data";
@Component({
  selector: "app-asset-details-form",
  templateUrl: "./asset-details-form.component.html",
  styleUrls: ["./asset-details-form.component.scss"],
})
export class AssetDetailsFormComponent implements OnInit {
  currentDate: Date = new Date();
  public projectId: string = "";
  public buttonName: string = "Add";
  formDataModel = new FormData(
    "",
    "",
    "",
    "",
    this.currentDate,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  );
  public supportComms=["PROFIBUS","PROFINET","Others"," Not Applicable"]
  maxDate: Date;
  public projectNames:IProjectName[]=[];
  constructor(
    private route: ActivatedRoute,
    private _assetDetailService: AssetDetailService,
    private router: Router
  ) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();

    this.maxDate = new Date(currentYear, currentMonth, currentDate + 1);
  }

  ngOnInit(): void {

    this._assetDetailService.getProjectsName().subscribe((data)=>this.projectNames=data);
    const id = this.route.snapshot.paramMap.get("id")!;
    this.projectId = id;
    // console.log(id);
    if (id != null) {
      this.buttonName = "Update";
      this._assetDetailService.getSingleAssetData(id).subscribe((data) => {
        this.formDataModel = data;
        console.log(data);
      });
    }
  }
  onSubmit() {
   
    if (this.projectId == null) {
      this._assetDetailService
        .postAssetData(this.formDataModel)
        .subscribe();

      this.router.navigate(["/home"]);
    } else {
      this._assetDetailService
        .editAssetData(this.formDataModel, this.projectId)
        .subscribe();
        
      this.router.navigate(["/home"]);
    }
  }
}
