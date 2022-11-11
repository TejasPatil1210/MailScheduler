import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
 import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { AccDetailsService } from 'src/acc-details.service';
// import { DialogInput } from 'src/dialogInput';
import { EditAccountFormComponent } from '../edit-account-form/edit-account-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TabscontentComponent } from '../tabscontent/tabscontent.component';
import { TabsCompService } from 'src/tabs-comp.service';
import { LoginInfo } from '../LoginInfo';
import { EmailsformService } from 'src/emailsform.service';
import { AuthService } from 'src/auth.service';

@Component({
  selector: 'app-homepgheader',
  templateUrl: './homepgheader.component.html',
  styleUrls: ['./homepgheader.component.css']
})
export class HomepgheaderComponent implements OnInit,AfterViewInit  {
  editButton:boolean=false;
  buttonName:string=""
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog,private accdetail:AccDetailsService,
   private activatedroute:ActivatedRoute,private route:Router,private tabsServ:TabsCompService,private tabcomp:TabscontentComponent,
   private emailFormserv:EmailsformService,private auth:AuthService) {}
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
   this.getuserData();
  }
  
  @ViewChild(TabscontentComponent,{static:true}) child:TabscontentComponent | undefined
  openDialog() {
    
    const dialogRef = this.dialog.open(DialogBoxComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getuserData();
    });
  }

  openDialog1() { 
    console.log(this.xyz.id);
    this.tabsServ.id=this.xyz.id; 
     const dialogRef = this.dialog.open(EditAccountFormComponent)
     //this.route.navigate(['EditForm',this.xyz.id])
     EditAccountFormComponent.prototype.ok1(this.xyz.id)
    //this.tabscomp.gatIdforFprm(this.xyz.id)
     dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog result: ${result}`);
      this.getuserData();
    });
  }
 xyz:any
 
//  :new FormControl('',[Validators.required,validateEmail]),
 
//  canExit()
//  {
//    if(this.child?.emailForm.controls['eFormTo'].value !=='' || this.child?.emailForm.controls['eFormCc'].value =='')
//    {
//      return confirm("The changes On this form are not saved Do you still want to leave?")
//    }
//    else
//    {
//      return true
//    }
//  }




 displaybutton(bName:any)
  {
    this.editButton=true;
    console.log(bName)
    this.buttonName=bName.dFaccName
    this.xyz=bName
    this.emailFormserv.emailmainForm=true;
    this.emailFormserv.emailEditForm=false;
    this.child?.checkMainFormStatus();
    this.child?.checkEditFormStatus()
    this.getEData()
  }

 getEData()
 {
 this.child?.getEmailData();
 }


  getxyz()
  {
    return this.xyz
  }

logOut()
{
this.auth.authorizeUser=false;
this.route.navigate(['/accounts/login'])
}

  msgfromchild:any
  // parentFun(dialogBoxData:any)
  // {
  //   console.log("dialogBoxData");
    
  //   this.msgfromchild=dialogBoxData;
  // }  

getuserData(){
  this.accdetail.getAccData().subscribe((x)=>{
    this.msgfromchild=x
    console.log(x);
    
  })
 }
}

// @Component({
//   selector: 'app-dialog-box',
// templateUrl: "./dialog-box.component.html",
//   styleUrls: ['./dialog-box.component.css']
// })
// export class DialogBoxComponent{}
