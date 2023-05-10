import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private _HttpClient:HttpClient) { }

  GetAllReports():Observable<any>
  {
    return this._HttpClient.get("http://ataal.somee.com/api/Report")
  }

  GetReportByID(id :any):Observable<any>
  {
    return this._HttpClient.get(`http://ataal.somee.com/api/Report/${id}`)
  }

  
  DeleteReport(id: number): Observable<HttpResponse<any>> {
    return this._HttpClient.delete(`http://ataal.somee.com/api/Report/${id}`, { observe: 'response' });
  }

}
