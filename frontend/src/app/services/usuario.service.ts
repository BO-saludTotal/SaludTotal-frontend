import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'https://saludtotal-backend.onrender.com/users';

  constructor(private http: HttpClient) {}

  registrarUsuario(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
