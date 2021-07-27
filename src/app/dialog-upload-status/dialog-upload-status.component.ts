import { Component, OnInit,Inject } from '@angular/core';
//import { DefaultGridAlignColumnsDirective } from '@angular/flex-layout/grid/typings/align-columns/align-columns';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-upload-status',
  templateUrl: './dialog-upload-status.component.html',
  styleUrls: ['./dialog-upload-status.component.scss']
})
export class DialogUploadStatusComponent implements OnInit {

  succ:boolean=false;
  unsucc:boolean=true;
  statusVal:number=1;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }
  
  ngOnInit(): void {
    this.succ=this.data.succ;
    this.unsucc=!(this.succ);
    if(this.succ==true)this.statusVal=100;
  }

}
