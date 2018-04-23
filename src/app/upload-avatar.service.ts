import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UploadAvatarService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  upload(data) {
    return this.http.post('http://localhost:3000/avatars/upload', { data: data}, this.httpOptions);
  }



}
