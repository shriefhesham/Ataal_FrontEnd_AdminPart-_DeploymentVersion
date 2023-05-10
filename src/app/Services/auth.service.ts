import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any = new BehaviorSubject(null);
 
  userRole: any = new BehaviorSubject(null);

  constructor(private http: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.getuserData();
     
    }
  }

  async getuserData() {
    let encodedUser = JSON.stringify(localStorage.getItem('userToken'));
    let decodeduser: any = jwtDecode(encodedUser);
    console.log(decodeduser);
    this.userData.next(decodeduser);
    this.userRole.next(
      this.userData.getValue()[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ]
    );
    console.log(this.userRole.getValue())


  }

  gitCustomerByAppUser(id: string): Observable<any> {
    return this.http.get(`http://ataal.somee.com/appuser/${id}`);
  }


 
  SinIn(LoginData: any): Observable<any> {
    return this.http.post(
      'http://ataal.somee.com/api/Identity/Login',
      LoginData
    );
  }





 





  sinout() {
    localStorage.removeItem('userToken');
    this.userData.next(null);

    this.userRole.next(null);
    
    this._Router.navigateByUrl('/Login');
  }
}
