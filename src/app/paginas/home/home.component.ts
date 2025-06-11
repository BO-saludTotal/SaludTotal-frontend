import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  irADoctores(e: Event) {
    e.preventDefault();
    document.getElementById('doctores')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  irAServicios(e: Event) {
    e.preventDefault();
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  irAInicio(e: Event) {
    e.preventDefault();
    document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}