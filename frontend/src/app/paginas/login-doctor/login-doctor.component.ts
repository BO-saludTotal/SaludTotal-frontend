import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login-doctor',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login-doctor.component.html',
  styleUrl: './login-doctor.component.css'
})
export class LoginDoctorComponent {
  usuario = {
    ci: '',
    codigo: '',
    password: ''
  };

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onSubmit() {
    this.usuarioService.loginUsuario(this.usuario).subscribe({
      next: (res: any) => {
        console.log('Login exitoso (doctor):', res);
        localStorage.setItem('token', res.accessToken);
        this.router.navigate(['/dashboard-doctor']);
      },
      error: () => {
        alert('CI, código o contraseña incorrectos');
      }
    });
  }
}

