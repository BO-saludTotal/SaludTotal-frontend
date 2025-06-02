import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-login-paciente',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login-paciente.component.html',
  styleUrl: './login-paciente.component.css'
})
export class LoginPacienteComponent {
  usuario = {
    ci: '',
    password: ''
  };

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onSubmit() {
    this.usuarioService.loginUsuario(this.usuario).subscribe({
      next: (res: any) => {
        console.log('Login exitoso:', res);
        localStorage.setItem('token', res.accessToken);
        this.router.navigate(['/dashboard-paciente']); // o donde corresponda
      },
      error: () => {
        alert('CI o contraseña incorrectos');
      }
    });
  }
}