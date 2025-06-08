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
    tipo: '', // Paciente, Doctor, Admin, Gobierno
    ci: '',
    password: '',
    nombreCompleto: '',
    fechaNacimiento: '',
    genero: '',
    direccion: '',
    nombresPadresTutores: '',
    numeroColegiado: '',
    cargoAdministrativo: '',
    entidadSaludIdAsignada: 1,
    nombreInstitucionGubernamental: '',
    cargoEnInstitucion: '',
    celular: '',
    email: ''
  };

  constructor(private api: ApiService, private router: Router) {}

  onSubmit() {
    if (!this.validarCampos()) {
      alert('Completa todos los campos obligatorios');
      return;
    }

    const payload: any = {
      username: this.usuario.ci,
      password: this.usuario.password,
      fullName: this.usuario.nombreCompleto,
      roleId: this.obtenerRoleId(this.usuario.tipo),
      fechaNacimiento: this.usuario.fechaNacimiento,
      genero: this.usuario.genero,
      direccionResidencia: this.usuario.direccion,
      phones: [{ phoneNumber: this.usuario.celular, phoneType: 'Móvil', isPrimary: true }],
      emails: [{ emailAddress: this.usuario.email, isPrimary: true }]
    };

    switch (payload.roleId) {
      case 1: // Gobierno
        payload.nombreInstitucionGubernamental = this.usuario.nombreInstitucionGubernamental;
        payload.cargoEnInstitucion = this.usuario.cargoEnInstitucion;
        break;
      case 2: // Paciente
        payload.nombresPadresTutores = this.usuario.nombresPadresTutores;
        break;
      case 3: // Doctor
        payload.numeroColegiado = this.usuario.numeroColegiado;
        break;
      case 4: // Admin
        payload.cargoAdministrativo = this.usuario.cargoAdministrativo;
        payload.entidadSaludIdAsignada = this.usuario.entidadSaludIdAsignada;
        break;
    }

    this.api.post('auth/register', payload).subscribe({
      next: (res: any) => {
        console.log('Registro exitoso:', res);
        alert('Usuario registrado con éxito');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error al registrar:', err);
        alert('Ocurrió un error en el registro');
      }
    });
  }

  obtenerRoleId(tipo: string): number {
    switch (tipo.toLowerCase()) {
      case 'gobierno': return 1;
      case 'paciente': return 2;
      case 'doctor': return 3;
      case 'admin': return 4;
      default: return 0;
    }
  }

  validarCampos(): boolean {
    return this.usuario.tipo !== '' &&
          this.usuario.ci !== '' &&
          this.usuario.password !== '' &&
          this.usuario.nombreCompleto !== '';
  }
}
