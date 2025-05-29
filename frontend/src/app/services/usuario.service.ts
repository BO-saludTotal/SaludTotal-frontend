import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  registrarUsuario(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
