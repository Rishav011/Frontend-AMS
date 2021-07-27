import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProjectName } from './asset-detail';
import { IAssetCount } from './dashboard-details';

@Injectable({
  providedIn: 'root'
})
export class DashboardDetailsService {

  constructor(private http : HttpClient) { 

  }

  getAssetTypeCount():Observable<IAssetCount>{
          let url="http://localhost:25160/api/assets/count";
         return this.http.get<IAssetCount>(url);
    
  }

  getManufacturerCount():Observable<any>{
    let url="http://localhost:25160/api/assets/manufacturer/count";
    return this.http.get<any>(url);
  }

  getWorkingAssets():Observable<any>{
    let url="http://localhost:25160/api/assets/working/count";
    return this.http.get<any>(url);
  }

  getTotalProjects():Observable<any>{
    let url="http://localhost:25160/api/assets/project/count";
    return this.http.get<any>(url);
  }

  getAssetCount():Observable<any>{
    let url="http://localhost:25160/api/assets/count";
    return this.http.get<any>(url);
  }

  getProjects():Observable<IProjectName[]>{
    let url="http://localhost:25160/api/projects";
    return this.http.get<IProjectName[]>(url);
  }






}
