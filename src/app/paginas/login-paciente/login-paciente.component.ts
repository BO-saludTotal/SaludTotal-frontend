import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login-paciente',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login-paciente.component.html',
  styleUrl: './login-paciente.component.css'
})
export class LoginPacienteComponent {
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
          localStorage.setItem('token', res.accessToken);
          this.router.navigate(['/dashboard-paciente']);
        },
        error: (err) => {
          console.error('Error en login:', err);
          alert('CI o contraseña incorrectos');
        }
      });
    } else {
      alert('Por favor completa todos los campos');
    }
  }
}
