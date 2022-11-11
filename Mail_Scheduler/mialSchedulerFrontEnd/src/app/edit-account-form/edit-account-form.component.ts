import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AccDetailsService } from 'src/acc-details.service';
import { DialogInput } from 'src/DialogInput';
import { TabsCompService } from 'src/tabs-comp.service';
import { HomepgheaderComponent } from '../homepgheader/homepgheader.component';
import { LoginInfo } from '../LoginInfo';


@Component({
  selector: 'app-edit-account-form',
  templateUrl: './edit-account-form.component.html',
  styleUrls: ['./edit-account-form.component.css']
})
export class EditAccountFormComponent implements OnInit,AfterViewInit {
  dialogForm:FormGroup
  constructor(private updateAccServ:AccDetailsService ,private route:Router,private home:HomepgheaderComponent,private tbser:TabsCompService){
    this.dialogForm=new FormGroup({
      dFaccName:new FormControl('',[Validators.required]),
      dFemail:new FormControl('',[Validators.required,validateEmail]),
      dFpass:new FormControl('',[Validators.required]),
      dFincServer:new FormControl('',[Validators.required]),
      dFincServPort:new FormControl('',[Validators.required]),
      dFoutServer:new FormControl('',[Validators.required]),
      dFoutServPort:new FormControl('',[Validators.required]),
      id:new FormControl()
    })
 }
  ngAfterViewInit(): void {
   // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    //  this.activatedroute.paramMap.subscribe(params=>{

this.ok()
    //let id=params.get('id') ?? 0;
    // let id=HomepgheaderComponent.prototype.getxyz();
    //        console.log("id1 "+id);      
    //   this.updateAccServ.getData(id).subscribe((data)=>{
    //    this.dialogForm.setValue(data)
    //  })
    //})
  }



ok1(id:number)
{
  console.log(id)
  return id;
}

ok()
{
 // this.activatedroute.paramMap.subscribe(params=>{
  //   let id=id1 ?? id1;
  // console.log("id "+ id1);
  //  //this.ngOnInit()
  //  //console.log("hiiiiiii")
  //     //this.getId(id1)
  //    this.updateAccServ?.getData(id1).subscribe(data=>{
  //      console.log("hiii")
  //      console.log(data);
  //    this.dialogForm.setValue(data)
  //   })
  //  })
  // let id1=HomepgheaderComponent.prototype.xyz;
  // console.log(id1)
  // console.log(id)

  // let editForm={
  //   dFaccName:id.dFaccName,
  //     dFemail:id.dFemail,
  //     dFpass:id.dFpass,
  //     dFincServer:id.dFincServer,
  //     dFincServPort:id.dFincServPort,
  //     dFoutServer:id.dFoutServer,
  //     dFoutServPort:id.dFoutServPort,
  // }
  // this.dialogForm.setValue(editForm);


  // let id=this.ok1()
  // console.log(id)
  // this.updateAccServ?.getData(id).subscribe(data=>{
  //        console.log("hiii")
  //        console.log(data);
  //      this.dialogForm.setValue(data)
     // })

     let id=this.tbser.getMainId()
     this.updateAccServ?.getData(id).subscribe(data=>{
             console.log("hiii")
             console.log(data);
           this.dialogForm.setValue(data)
         })

}
  
delData()
{
  let id=this.tbser.getMainId()
  this.updateAccServ.deleteAccData(id).subscribe(()=>{
    console.log("Data deleted successfully");
    
  },()=>{
    console.log("error");
    
  })
}
// getId(id:number)
// {
//   console.log("getId"+id)  
// }
  updateAccData()
   {
    this.dialogForm.patchValue({
      id:this.tbser.id
    })
    this.updateAccServ.updateAccData(this.dialogForm.value).subscribe(()=>{
      this.route.navigate(['home'])
      },
    ()=>{
      alert("Error")
    })
  }



}

// dFaccName:new FormControl('',[Validators.required]),
// dFemail:new FormControl('',[Validators.required,validateEmail]),
// dFpass:new FormControl('',[Validators.required]),
// dFincServer:new FormControl('',[Validators.required]),
// dFincServPort:new FormControl('',[Validators.required]),
// dFoutServer:new FormControl('',[Validators.required]),
// dFoutServPort:new FormControl('',[Validators.required]),
// id:
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