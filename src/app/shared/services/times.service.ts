import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = environment.URL_API;

@Injectable({
  providedIn: 'root',
})
export class TimesService {
  constructor(private http: HttpClient) {}

  listarTimes(): Observable<any[]> {
    return this.http.get<any>(`${API}times`);
  }
}
