import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccDetailsService } from 'src/acc-details.service';
import { MailschloginService } from 'src/mailschlogin.service';
import { HomepgheaderComponent } from '../homepgheader/homepgheader.component';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  @Output()
  emitter=new EventEmitter();
  accData:any
  dialogForm:FormGroup
  constructor(private saveAccServ:AccDetailsService) { 
    this.dialogForm=new FormGroup({
      dFaccName:new FormControl('',[Validators.required]),
      dFemail:new FormControl('',[Validators.required,validateEmail]),
      dFpass:new FormControl('',[Validators.required]),
      dFincServer:new FormControl('',[Validators.required]),
      dFincServPort:new FormControl('',[Validators.required]),
      dFoutServer:new FormControl('',[Validators.required]),
      dFoutServPort:new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
    this.getAccData();
  }

  saveAccData()
  {
    this.saveAccServ.storeAccData(this.dialogForm.value).subscribe(()=>{
      // alert("Data Saved successfully")
      // this.homepgHeader.getuserData() 
      },
    ()=>{
      alert("Error")
    })
  }

  getAccData()
  {
    this.saveAccServ.getAccData().subscribe((x)=>{
      console.log("X=");
      console.log(x);
      // const variable = [{key1: "value1"}, {key2: "value2"}];
     this.accData=x
     console.log(x);
      this.emitter.emit(this.accData);
   })
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

  // 
  // for (var value of this.accData){
  //   const firstKey:any= Object.keys(value);
  //   console.log(firstKey);
  //   console.log(this.accData.filter(x=>this.accData[0][0]))
   
  // }
  // const a=this.accData[0].length
  // console.log(a);
  
  // for (var i=0;i<a;i++){
  //   console.log(this.accData[0][i].dFemail);
  //   console.log(this.dialogForm.get(['dFemail'])?.value)
  //   const data:any[]=[]
  //   if(this.accData[0][i].dFemail === this.dialogForm.get(['dFemail'])?.value)
  //   {
  //     console.log('hiii')
  //     data.push(this.accData[0][i])
  //     console.log(data);
   // }
  // const data:any[]=this.accData.filter(x=>this.accData[0][i].dFemail === this.dialogForm.get(['dFemail'])?.value)  
  //console.log("Data=");
  // console.log(data);
  
      //const count:number=x

    //   console.log("this.accData=")
    //   console.log(this.accData[0][0].dFemail)

        
      
    // })
  //}



//   }
//   }
// }
