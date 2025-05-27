import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cambiar-contra-paciente',
  imports: [RouterModule],
  templateUrl: './cambiar-contra-paciente.component.html',
  styleUrl: './cambiar-contra-paciente.component.css'
})
export class CambiarContraPacienteComponent {
  onSubmit() {
    console.log('Formulario enviado');
    // Aquí podrías hacer validaciones o enviar a backend
  }
}
