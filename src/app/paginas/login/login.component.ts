import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { NavigationExtras } from '@angular/router';

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
        const rol = res.user?.roles?.[0];
        // extraemos Usuario y ci
        const fullName = res.user?.fullName;      
        const carnet   = res.user?.username; 

        console.log('Rol recibido:', rol);
        
        // --- aquí creamos el state con el carnet ---
        const extras: NavigationExtras = {
          state: {
            carnet,
            fullName
          }
        };

        switch (rol) {
          case 'Gobierno':
            this.router.navigate(['/dashboard-gobierno'], extras);
            break;
          case 'Paciente':
            this.router.navigate(['/dashboard-paciente'], extras);
            break;
          case 'Doctor':
            this.router.navigate(['/dashboard-doctor'], extras);
            break;
          case 'Administrador':
            this.router.navigate(['/dashboard-administrador'], extras);
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