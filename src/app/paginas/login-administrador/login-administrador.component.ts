import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login-administrador',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login-administrador.component.html',
  styleUrl: './login-administrador.component.css'
})
export class LoginAdministradorComponent {
  usuario = {
    ci: '',
    codigo: '',
    password: ''
  };

  constructor(private api: ApiService, private router: Router) {}

  onSubmit() {
    if (this.usuario.ci && this.usuario.codigo && this.usuario.password) {
      this.api.post('auth/login', this.usuario).subscribe({
        next: (res: any) => {
          console.log('Login exitoso:', res);
          localStorage.setItem('token', res.accessToken);
          this.router.navigate(['/dashboard-administrador']);
        },
        error: (err) => {
          console.error('Error en login:', err);
          alert('CI, código o contraseña incorrectos');
        }
      });
    } else {
      alert('Por favor completa todos los campos');
    }
  }
}
