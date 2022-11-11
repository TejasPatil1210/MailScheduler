import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInfo } from  './app/LoginInfo'
@Injectable({
  providedIn: 'root'
})
export class MailschloginService {

  constructor(private http:HttpClient) { }
  //regapi="http://localhost:4000/register";
  //authapi="http://localhost:4000/authenticate";
  regapi="http://localhost:3000/register"
  authapi="http://localhost:3000/authenticate"
  
storedata(data:any):Observable<LoginInfo>
{
 return this.http.post<LoginInfo>(this.regapi,data)
}

// storeAuthData(authdata:any)
// {
//   return this.http.post(this.authapi,authdata)
// }

// gedata()
// {
//   return this.http.get(this.authapi);
// }


checkdata(cData:any):Observable<LoginInfo>
{
  return this.http.post<LoginInfo>(this.authapi,cData)
}



}
