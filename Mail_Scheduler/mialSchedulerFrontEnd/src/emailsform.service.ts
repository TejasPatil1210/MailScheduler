import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailsformService {

  constructor() { }

emailmainForm:boolean=true;
emailEditForm:boolean=false;

getEmailMainForm()
{
  return this.emailmainForm
}
getEmailEditForm()
{
  return this.emailEditForm
}

}
