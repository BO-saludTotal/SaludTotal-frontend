import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-paciente',
  imports: [RouterModule],
  templateUrl: './login-paciente.component.html',
  styleUrl: './login-paciente.component.css'
})
export class LoginPacienteComponent {
      onSubmit() {
    // Aquí va la lógica de login si lo necesitas
    console.log("Formulario enviado");
  }

}