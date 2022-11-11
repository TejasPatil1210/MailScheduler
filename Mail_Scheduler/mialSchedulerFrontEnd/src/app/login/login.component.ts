import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth.service';
import { MailschloginService } from 'src/mailschlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  authuserlist:any[]=[]; 
  loginForm:FormGroup
  constructor(private mailogserv:MailschloginService,private route:Router,private authservice:AuthService) {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
   }
  
  ngOnInit(): void {
  }

  checkAuthdata()
  {
   // const authData=this.loginForm.value;
    this.mailogserv.checkdata(this.loginForm.value).subscribe((value)=>
    {
      alert('Login successfully');
     
      this.authservice.authorizeUser=true;
      this.route.navigate(['home'])
       },
         ()=>{
          alert("Username or Password invalid");
          // this.route.navigate(['/accounts/register'])
          })
  }
  
  // checkAuthdata()
  // {
  //   this.mailogserv.gedata().subscribe((x)=>
  //   {
  //     console.log(x);
  //     this.authuserlist.push(x);
  //     console.log(this.authuserlist);
  //     console.log(this.loginForm.get(['lgemail'])?.value);
  //     console.log(this.loginForm.get(['lgpass'])?.value);
      
  //     let authuser=this.authuserlist.filter((r)=>
  //     ((r === this.loginForm.get(['lgemail'])?.value) && (r === this.loginForm.get(['lgpass'])?.value)))

  //      console.log(authuser);
       
       
  //      this.authuserlist.map((x)=>console.log(x))
  //   })
  // }



}
