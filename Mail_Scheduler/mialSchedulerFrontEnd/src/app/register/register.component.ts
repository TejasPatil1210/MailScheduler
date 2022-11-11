import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MailschloginService } from 'src/mailschlogin.service';
import { CheckpasswordService } from 'src/checkpassword.service';
import * as moment from 'moment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private regservice:MailschloginService,private routes:Router,private chkpass:CheckpasswordService) {
    this.registerForm =new FormGroup({
    email:new FormControl('',[Validators.required,validateEmail]),
    password:new FormControl('',[Validators.required,validatePass]),
    confPassword:new FormControl('',[Validators.required,validateconfPass])      
  });
}
//  pass:any
//  cPass:any
//  checkValidatePAss()
//  { this.chkpass.password=this.registerForm.controls['password'].value
//  this.chkpass.confPassword=this.registerForm.controls['confPassword'].value
//  }
  ngOnInit(): void {
  }



//   storereData()
//   {
//     const regData=this.registerForm.value;
//     this.regservice.storedata(regData).subscribe(()=>
//     {
//       alert('successfully registered');
//       this.storeAuthData();
//     },error=>{
//       alert(error);
//     })
//   }

//   storeAuthData()
//   {
//   let userinfo={
//     email:this.registerForm.controls['rfemail'].value,
//     password:this.registerForm.controls['rfpass'].value  
// }
//     const authdata=userinfo;
//     this.regservice.storeAuthData(authdata).subscribe(()=>{
//       console.log("auth data is stored sucessfully!")
//     })
//   }

storeData()
{
  const regData=this.registerForm.value;
  this.regservice.storedata(regData).subscribe(()=>
  {
    console.log("hii");
        alert('successfully registered')
        this.routes.navigate(['/accounts/login'])
         },error=>{
           alert(error);
        })
}

}

export function validateEmail(control:AbstractControl){
  let email=control.value
  console.log(email);
    
  let validRegex ="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  if (email.match(validRegex))
  {
    return null;    
  }
  else
  {
    return {myerr:false}
  }
}

export function validatePass(control:AbstractControl){
  let pass:string=control.value  
  CheckpasswordService.prototype.password=pass;
  if(pass.length >=6)
  {
    return null;
  }
  else
  {
    return {myError:false}
  }
}




export function validateconfPass(control:AbstractControl){
  // let pass:String=control.value;
  // let pass1:String |null
  // if(RegisterComponent.prototype.registerForm.controls['rfpass'].dirty)
  // {
  //   let pass1:String | any =RegisterComponent.prototype.registerForm.controls['rfpass'].value   
  // console.log(pass1)
  // if(pass===pass1)
  // {
  //   return null;
  // }
  // else
  // {
  //   return {myerr1:false}
  // }
  // }
  const confpass=control.value
  console.log(confpass);
  const pass= CheckpasswordService.prototype.getpasswd()
  console.log(pass);
  
  if(confpass === pass)
  {
  return null
  }
  else{
    return {mayErr1:false}
  }
 }


// export function validateConfPass(control:AbstractControl){

// }
