import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private baseUrl = 'http://localhost:4201';

  constructor(private http: HttpClient) {}

  addEntry(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, data);
  }

  getEntries(): Observable<any> {
    return this.http.get(`${this.baseUrl}/view`);
  }

}
