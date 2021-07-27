export class FormData {
    constructor(
       public category:string,
       public currentUserEmail:string,
       public description:string,
       public invoiceNumber:string,
       public invoiceReceiveDate:Date,
       public ipAddress:string,
       public location:string,
       public manufacturer:string,
       public mlfb:string,
       public name:string,
       public owner:string,
       public poNumber:string,
       public projectName:string,
       public remarks:string,
       public serialNumber:string,
       public supportComm:string,
       public workingCondition:string,
       public ipType:string,
       public macAddress:string
    ){}
}
