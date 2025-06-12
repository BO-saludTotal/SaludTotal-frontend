import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = {
    username: '',
    password: ''
  };

  constructor(private api: ApiService, private router: Router) {}

onSubmit(): void {
  if (this.usuario.username && this.usuario.password) {
    this.api.post('auth/login', this.usuario).subscribe({
      next: (res: any) => {
        console.log('Login exitoso:', res);

        // Guardar el token
        localStorage.setItem('token', res.accessToken);

        // Detectar rol
        const rol = res.rol ?? res.user?.rol ?? res.user?.roles?.[0]?.name;

        console.log('Rol recibido:', rol);
        switch (rol) {
          case 'Gobierno':
            this.router.navigate(['/dashboard-gobierno']);
            break;
          case 'Paciente':
            this.router.navigate(['/dashboard-paciente']);
            break;
          case 'Doctor':
            this.router.navigate(['/dashboard-doctor']);
            break;
          case 'Administrador':
            this.router.navigate(['/dashboard-administrador']);
            break;
          default:
            alert('Rol no reconocido: ' + rol);
            console.error('Rol inesperado recibido:', rol);
            break;
        }
      },
      error: (err: any) => {
        console.error('Error en login:', err);
        alert('Usuario o contraseña incorrectos');
      }
    });
  } else {
    alert('Por favor completa todos los campos');
  }
}
}
