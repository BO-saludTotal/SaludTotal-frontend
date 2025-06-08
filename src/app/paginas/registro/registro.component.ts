import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuario = {
    tipo: '',
    nombreCompleto: '',
    ci: '',
    email: '',
    celular: '',
    direccion: '',
    fechaNacimiento: '',
    genero: '',
    password: ''
  };

  constructor(private api: ApiService, private router: Router) {}

  onSubmit() {
    if (this.validarCampos()) {
      this.api.post('auth/registro', this.usuario).subscribe({
        next: (res: any) => {
          console.log('Registro exitoso:', res);
          alert('Usuario registrado con éxito');
          this.router.navigate(['/login-paciente']); // o según el tipo
        },
        error: (err) => {
          console.error('Error al registrar:', err);
          alert('Ocurrió un error en el registro');
        }
      });
    } else {
      alert('Completa todos los campos');
    }
  }

  validarCampos(): boolean {
    return Object.values(this.usuario).every(valor => valor !== '');
  }
}
