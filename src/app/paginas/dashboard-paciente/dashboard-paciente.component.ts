import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-paciente',
  imports: [RouterModule],
  templateUrl: './dashboard-paciente.component.html',
  styleUrl: './dashboard-paciente.component.css'
})
export class DashboardPacienteComponent implements OnInit {
  carnet = 'Paciente';

  ngOnInit() {
    this.carnet = history.state.carnet || this.carnet;
  }
}