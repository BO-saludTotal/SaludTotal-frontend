import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { NavigationExtras } from '@angular/router'; // nuevo cambio para enviar el nom de usuario al dashborard

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = {
    username: '',
    password: ''
  };

  constructor(private api: ApiService, private router: Router) {}

  onSubmit() {
    if (this.usuario.username && this.usuario.password) {
      this.api.post('auth/login', this.usuario).subscribe({
        next: (res: any) => {
          console.log('Login exitoso:', res);

          // Guardar el token en el localStorage
          localStorage.setItem('token', res.accessToken);

          // Detectar correctamente el rol desde diferentes estructuras posibles
          const roleId = res.roleId ?? res.user?.roleId ?? res.data?.roleId;

          console.log('Detectado roleId:', roleId); 

          // Creamos un objeto NavigationExtras con nuestro username
          const extras: NavigationExtras = { // nuevo cambio para enviar el nom de usuario al dashborard
            state: { username: this.usuario.username }
          };

          // Redirección según el rol
          switch (roleId) {
            case 1:
              this.router.navigate(['/dashboard-gobierno'], extras); // nuevo cambio pasamos el nuevo obj extras junto con la ruta
              break;
            case 2:
              this.router.navigate(['/dashboard-paciente'], extras);
              break;
            case 3:
              this.router.navigate(['/dashboard-doctor'], extras);
              break;
            case 4:
              this.router.navigate(['/dashboard-administrador'], extras);
              break;
            default:
              alert('Rol no reconocido');
              console.error('No se pudo detectar un roleId válido:', res);
              break;
          }
        },
        error: (err) => {
          console.error('Error en login:', err);
          alert('Usuario o contraseña incorrectos');
        }
      });
    } else {
      alert('Por favor completa todos los campos');
    }
  }
}
