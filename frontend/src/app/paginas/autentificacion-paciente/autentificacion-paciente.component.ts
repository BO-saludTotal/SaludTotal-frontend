import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-autentificacion-paciente',
  imports: [RouterModule],
  templateUrl: './autentificacion-paciente.component.html',
  styleUrl: './autentificacion-paciente.component.css'
})
export class AutentificacionPacienteComponent {
  onSubmit() {
    console.log('Formulario enviado');
    // Aquí podrías hacer validaciones o enviar a backend
  }
}
