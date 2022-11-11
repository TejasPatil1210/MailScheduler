import { Injectable } from '@angular/core';
//import { EditAccountFormComponent } from './app/edit-account-form/edit-account-form.component';

@Injectable({
  providedIn: 'root'
})
export class TabsCompService {

  // constructor() { }

  // gatIdforFprm(id:number)
  // {
  //   this.Editcomp.ok(id)
  // }

  id:number=0;

  getMainId()
  {
    return this.id;
  }

}
