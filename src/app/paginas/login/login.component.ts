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

          // Detectar el roleId correctamente desde distintas estructuras posibles
          const roleId = res.user?.roles?.[0]?.id ?? res.roleId ?? res.user?.roleId ?? res.data?.roleId;

          console.log('Detectado roleId:', roleId);

          // Redireccionar según el roleId
          switch (roleId) {
            case 1:
              this.router.navigate(['/dashboard-gobierno']);
              break;
            case 2:
              this.router.navigate(['/dashboard-paciente']);
              break;
            case 3:
              this.router.navigate(['/dashboard-doctor']);
              break;
            case 4:
              this.router.navigate(['/dashboard-administrador']);
              break;
            default:
              alert('Rol no reconocido');
              console.error('Estructura de roles inválida:', res.user?.roles);
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
