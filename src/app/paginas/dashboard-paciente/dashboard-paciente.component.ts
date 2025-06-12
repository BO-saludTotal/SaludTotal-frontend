import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-paciente',
  imports: [RouterModule],
  templateUrl: './dashboard-paciente.component.html',
  styleUrl: './dashboard-paciente.component.css'
})
export class DashboardPacienteComponent implements OnInit {
  // valores por defecto en caso de entrar “a mano” o recargar
  carnet   = 'ci';
  fullName = 'Paciente';

  ngOnInit() {
    // Leer del history.state
    this.carnet   = history.state.carnet   || this.carnet;
    this.fullName = history.state.fullName || this.fullName;
  }
}