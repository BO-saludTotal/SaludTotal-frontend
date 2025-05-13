import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-administrador',
  imports: [RouterModule],
  templateUrl: './login-administrador.component.html',
  styleUrl: './login-administrador.component.scss'
})
export class LoginAdministradorComponent {
    onSubmit() {
    console.log("Formulario de administrador enviado");
  }

}
