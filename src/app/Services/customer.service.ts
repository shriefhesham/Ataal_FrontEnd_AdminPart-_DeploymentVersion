import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _HttpClient:HttpClient) { }


  GetCustomerByID(id:any):Observable<any>
  {
    return this._HttpClient.get(`http://ataal.somee.com/api/Customer/${id}`)
  }
}
