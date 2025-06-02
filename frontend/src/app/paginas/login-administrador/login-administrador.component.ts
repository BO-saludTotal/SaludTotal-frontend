import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

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

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onSubmit() {
    this.usuarioService.loginUsuario(this.usuario).subscribe({
      next: (res: any) => {
        console.log('Login exitoso (admin):', res);
        localStorage.setItem('token', res.accessToken);
        this.router.navigate(['/dashboard-admin']);
      },
      error: () => {
        alert('CI, código o contraseña incorrectos');
      }
    });
  }
}