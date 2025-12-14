import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgServiceService {

  
  private apiUrl = 'https://exemplo-projeto.onrender.com/api/coment/';

  constructor(private http: HttpClient) {}

  sendMessage(text: string): Observable<any> {
    return this.http.get<any>(this.apiUrl+text);
  }

}
