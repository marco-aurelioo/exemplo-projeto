import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseMsg } from '../models/ResponseMsg';

@Injectable({
  providedIn: 'root'
})
export class MsgServiceService {

  
  private apiUrl = 'https://exemplo-projeto.onrender.com/api/coment/';

  constructor(private http: HttpClient) {}

  sendMessage(text: string): Observable<ResponseMsg> {
    return this.http.get<any>(this.apiUrl+text);
  }

}
