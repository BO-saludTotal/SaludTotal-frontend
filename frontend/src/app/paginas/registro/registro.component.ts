import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [RouterModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
    onSubmit() {
    console.log('Formulario enviado');
    // Aquí podrías hacer validaciones o enviar a backend
  }


}
