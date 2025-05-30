import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-actualizar-info-paciente',
  imports: [RouterModule],
  templateUrl: './actualizar-info-paciente.component.html',
  styleUrl: './actualizar-info-paciente.component.css'
})
export class ActualizarInfoPacienteComponent {
  onSubmit() {
    console.log('Formulario enviado');
    // Aquí podrías hacer validaciones o enviar a backend
  }
}

