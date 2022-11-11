import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  authorizeUser:boolean=false;
  redirectedUrl:any | null=null;

  CheckAuthorizeUser()
  {
    return this.authorizeUser;
  }
}
