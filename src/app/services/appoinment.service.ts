import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  constructor(private http: HttpClient) { }

  getAppoinments(): Observable<any> {
    const url = 'assets/appoinments.json';
    return this.http.get(url);
  }

  createAppoinment(data: any): Observable<any> {
    const url = '';
    return this.http.post(url, data);
  }
}
