import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailInput } from './EmailInput';
@Injectable({
  providedIn: 'root'
})
export class EmailserverService {

  constructor(private http:HttpClient) { }

  emailservApi="http://localhost:5000/posts";


  storeEmail(emailData:any):Observable<EmailInput>
  {
   return this.http.post<EmailInput>(this.emailservApi,emailData)
  }

  getEmails():Observable<EmailInput>
  {
    return this.http.get<EmailInput>(this.emailservApi)
  }

fetchEmailData(id:any)
{
  console.log("in GetData"+id);
  return this.http.get(`${this.emailservApi}/${id}`)
}
  updateEmailData(upEmail:any):Observable<EmailInput>
{
  console.log("Data Updated");
  return this.http.put<EmailInput>(`${this.emailservApi}/${upEmail.id}`,upEmail);
}

}
