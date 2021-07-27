export interface IAssetDetail {
   category:string,
   description:string,
   currentUserEmail:string,
   invoiceNumber:string,
   invoiceReceiveDate:Date,
   ipAddress:string,
   location:string,
   manufacturer:string,
   mlfb:string,
   name:string,
   owner:string,
   poNumber:string,
   projectName:string,
   remarks:string,
   serialNumber:string,
   supportComm:string,
   workingCondition:string,
   ipType:string,
   macAddress:string
}

export interface IProjectName{
   id:number,
   name:string
}

export interface ITotalAssetDetail{
   pages:number,
   currPage:number,
   data:IAssetDetail[]
}