import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAssetDetail, IProjectName, ITotalAssetDetail } from './asset-detail';
import { FormData } from './form-data';
@Injectable({
  providedIn: 'root'
})
export class AssetDetailService {
  private _url:string="http://localhost:25160/api/assets";
  constructor(private http:HttpClient) { }
  
  getAssetData(page:number,pageSize:string):Observable<ITotalAssetDetail>{
    let getUrl = `${this._url}?page=${page}&pageSize=${pageSize}`
    // console.log(getUrl);
    return this.http.get<ITotalAssetDetail>(getUrl);
  }

  getSingleAssetData(id:string):Observable<IAssetDetail>{
    let postUrl = `${this._url}/${id}`;
    return this.http.get<IAssetDetail>(postUrl);
  }

  postAssetData(formData:FormData){
    return this.http.post<IAssetDetail>(this._url,formData);
  }

  editAssetData(formData:FormData,id:string){
    let postUrl = `${this._url}/${id}`;
    return this.http.put<IAssetDetail>(postUrl,formData);
  }

  postExcelData(file:any){
    let postUrl = `${this._url}/import`;
    return this.http.post(postUrl,file,{responseType:'blob'});
  }

  getProjectsName():Observable<IProjectName[]>{
    let getUrl="http://localhost:25160/api/projects";
    return this.http.get<IProjectName[]>(getUrl);
  }

  //for Debugging only!
  deleteAllAssets(){
    let deleteUrl = `${this._url}/clear`;
    return this.http.delete(deleteUrl);
  }
  exportAsset(){
    let exportUrl=`${this._url}/export`;
   return this.http.get(exportUrl,{responseType:'blob'});
  }
  downloadTemplate():Observable<any>{
    let downloadUrl ="http://localhost:25160/api/assets/template";
    return this.http.get<any>(downloadUrl);
  }
}