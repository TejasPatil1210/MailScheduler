import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailserverService } from 'src/emailserver.service';
import { EmailsformService } from 'src/emailsform.service';
import { HomepgheaderComponent } from '../homepgheader/homepgheader.component';
import * as moment from 'moment';
@Component({
  selector: 'app-tabscontent',
  templateUrl: './tabscontent.component.html',
  styleUrls: ['./tabscontent.component.css']
})
export class TabscontentComponent implements OnInit {
@Input()
data:any

  emailForm:FormGroup
  constructor(private emailserv:EmailserverService,private emailFormserv:EmailsformService) { 
    this.emailForm=new FormGroup({
      eFormTo:new FormControl('',[Validators.required,validateEmail]),
      eFormCc:new FormControl(''),
      eFormBcc:new FormControl(''),
      eFormSubject:new FormControl('',[Validators.required,Validators.maxLength(60)]),
      eFormBody:new FormControl('',[Validators.required,Validators.maxLength(220)]),
      eFormDate:new FormControl('',[Validators.required,validateDate]),
      eFormTime:new FormControl('',[Validators.required]),
      eSenderEmail:new FormControl(''),
      id:new FormControl()
    })
  }

emailmainform:boolean=this.emailFormserv.getEmailMainForm();
emailEditform:boolean=this.emailFormserv.getEmailEditForm();
checkMainFormStatus()
{
  this.emailmainform=this.emailFormserv.getEmailMainForm();
}

checkEditFormStatus()
{
  this.emailEditform=this.emailFormserv.getEmailEditForm();
}

  storeEmaildata()
  {
  // if(this.emailForm.controls['id'].value === null || undefined || 0)
  // {
  //var dta:any=HomepgheaderComponent.prototype.getxyz();
  this.emailForm.patchValue({
    eSenderEmail:this.data.dFemail
  })
  console.log(this.emailForm.value)
  //controls[eSenderEmail].value(this.data.dFemail) 
  console.log(this.emailForm.value);
  this.emailserv.storeEmail(this.emailForm.value).subscribe(()=>{
    this.getEmailData();
     this.emailForm.reset()
    // this.emailForm.controls['eFormTo,eFormSubject,eFormCc,eFormBcc,eFormBody,eFormDate,eFormTime'].reset();
    // this.emailForm.controls[''].reset();
    // this.emailForm.controls[''].reset();
    // this.emailForm.controls[''].reset();
    // this.emailForm.controls[''].reset();
    // this.emailForm.controls[''].reset();
    // this.emailForm.controls[''].reset();
  })
  
// }
// else{
//   this.updateEmail()
// }  
}

  emailArr:any
  emailsData:any
  getEmailData()
  {
    this.emailserv.getEmails().subscribe((eData)=>{
      console.log(eData);   
      console.log("Sender Email "+eData.eSenderemail);
      this.emailArr=eData;
      this.emailsData=this.emailArr.filter((x: { eSenderEmail: any; })=>x.eSenderEmail == this.data.dFemail )
     
     
      // if(this.data.dFemail == eData.eSenderemail)
      // {
      //   this.emailArr=eData
      //   console.log("emailArray"+this.emailArr);
      // }
      console.log(this.emailsData);
    })  
  }

  eObj:any  
  fetchEmail(emailObj:any)
  {
    this.emailFormserv.emailmainForm=false;
    this.emailFormserv.emailEditForm=true;
    this.emailmainform=this.emailFormserv.getEmailMainForm()
    this.emailEditform=this.emailFormserv.getEmailEditForm()
    this.eObj=emailObj
   this.emailserv.fetchEmailData(emailObj.id).subscribe((data)=>{
    this.emailForm.setValue(data)
    this.emailForm.patchValue({id:0});  
   }) 
   
  }


  updateEmail()
  {
    {
      this.emailForm.patchValue({
        id:this.eObj.id
      })
      this.emailserv.updateEmailData(this.emailForm.value).subscribe(()=>{
        // this.emailFormserv.emailmainForm=true
        // this.emailFormserv.emailEditForm=false
        // this.emailmainform=this.emailFormserv.getEmailEditForm()
        // this.emailEditform=this.emailFormserv.getEmailEditForm()
        this.emailForm.patchValue({id:0});
        this.getEmailData()
      })
      
  }
}
  ngOnInit(): void {
    this.getEmailData();
  }

}

export function validateEmail(control:AbstractControl){
  let email=control.value  
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

export function validateDate(control:AbstractControl){
  let schedulingdate=moment(control.value)  
  let todaydate=moment();

  if(schedulingdate.isBefore(todaydate))
  {
    return {myerr:false}
  }
  else
  {
    return null;
  }
}