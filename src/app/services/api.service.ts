import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Agrego HttpHeaders
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

    /** Agrego  cabeceras Authorization con tu token */
  private get authHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  /** Agrego GET con Authorization */
  get<T>(path: string) {
    return this.http.get<T>(
      `${this.baseUrl}/${path}`,
      { headers: this.authHeaders }
    );
  }

  /** Agrego POST con Authorization */
  post<T>(path: string, data: any) {
    return this.http.post<T>(
      `${this.baseUrl}/${path}`,
      data,
      { headers: this.authHeaders }
    );
  }

  /** Agrego PUT con Authorization */
  put<T>(path: string, data: any) {
    return this.http.put<T>(
      `${this.baseUrl}/${path}`,
      data,
      { headers: this.authHeaders }
    );
  }

  /** Agrego DELETE con Authorization */
  delete<T>(path: string) {
    return this.http.delete<T>(
      `${this.baseUrl}/${path}`,
      { headers: this.authHeaders }
    );
  }
  
  /*get<T>(path: string) {
    return this.http.get<T>(`${this.baseUrl}/${path}`);
  }

  post<T>(path: string, data: any) {
    return this.http.post<T>(`${this.baseUrl}/${path}`, data);
  }

  put<T>(path: string, data: any) {
    return this.http.put<T>(`${this.baseUrl}/${path}`, data);
  }

  delete<T>(path: string) {
    return this.http.delete<T>(`${this.baseUrl}/${path}`);
  }*/
}
