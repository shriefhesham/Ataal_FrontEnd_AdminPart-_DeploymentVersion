import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Login:FormGroup=new FormGroup({

    'userName':new FormControl('',[Validators.required]),
    'password':new FormControl('',[Validators.required]),

  })
  submitLogin(){
    if(this.Login.invalid){
      return;
    }
    this.Auth.SinIn(this.Login.value).subscribe((data)=>{
      console.log(data)
      if(data.token!=null){
       
      localStorage.setItem("userToken",data.token);
      this.Auth.getuserData();
      console.log(this.Login.value)
      }
      this.Auth.userRole.subscribe(
        ()=>{
      if(this.Auth.userRole.getValue()!=null){
if(this.Auth.userRole.getValue()=="Admin"){
  this._Router.navigateByUrl("Home");
}


      }})

      // this._Router.navigateByUrl("");
    });


  }
  constructor(private Auth: AuthService, private _Router:Router){}
}

