import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-paciente',
  imports: [RouterModule],
  templateUrl: './dashboard-paciente.component.html',
  styleUrl: './dashboard-paciente.component.css'
})
export class DashboardPacienteComponent implements OnInit {
  username: string = 'Paciente';

  ngOnInit() {
    // history.state.username viene de NavigationExtras.state
    this.username = history.state.username || this.username;
  }
}