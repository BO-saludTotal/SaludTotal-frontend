import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- AGREGA ESTO
import { CommonModule } from '@angular/common'; 
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
usuario = {
  tipo: '', // <--- nuevo
  nombreCompleto: '',
  ci: '',
  email: '',
  celular: '',
  direccion: '',
  fechaNacimiento: '',
  genero: '',
  password: ''
};


  constructor(private usuarioService: UsuarioService) {}

onSubmit() {
  if (this.validarCampos()) {
    this.usuarioService.registrarUsuario(this.usuario).subscribe({
      next: (res: any) => {
        console.log('Usuario registrado:', res);
        alert('Usuario registrado con éxito');
      },
      error: (err: any) => {
        console.error('Error al registrar:', err);
        alert('Hubo un error al registrar');
      }
    });
  } else {
    alert('Completa todos los campos obligatorios');
  }
}

  validarCampos(): boolean {
    return Object.values(this.usuario).every(valor => valor !== '');
  }
}
