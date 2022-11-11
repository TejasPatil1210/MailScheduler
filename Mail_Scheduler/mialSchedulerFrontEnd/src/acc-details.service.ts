import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogInput } from './DialogInput'
@Injectable({
  providedIn: 'root'
})
export class AccDetailsService {

  constructor(private http:HttpClient) { }

  accDetapi="http://localhost:4000/posts"


  storeAccData(accData:any): Observable<DialogInput>
{
  return this.http.post<DialogInput>(this.accDetapi,accData)
}

getData(id:any)
{
  console.log("in GetData"+id);
  return this.http.get(`${this.accDetapi}/${id}`)
}

deleteAccData(id:any)
{
  return this.http.delete(`${this.accDetapi}/${id}`)
}

getAccData():Observable<DialogInput>
{
  return this.http.get<DialogInput>(this.accDetapi);
}

updateAccData(upData:any):Observable<DialogInput>
{
  return this.http.put<DialogInput>(`${this.accDetapi}/${upData.id}`,upData);
}


}
