import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-doctor',
  imports: [RouterModule],
  templateUrl: './login-doctor.component.html',
  styleUrl: './login-doctor.component.css'
})
export class LoginDoctorComponent {
    onSubmit() {
    // Aquí va la lógica de login si lo necesitas
    console.log("Formulario enviado");
  }

}