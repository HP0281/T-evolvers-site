import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  constructor(private http:HttpClient) { }

  public registerPQRS(body:any):Observable<any>{
    return this.http.post('https://formspree.io/f/xvoenkzz',body);
  }
}
