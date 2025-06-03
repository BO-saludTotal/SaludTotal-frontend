import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { EntradaHistorialMedico } from '../../models/historial-medico.model';
import { CommonModule, DatePipe } from '@angular/common';
@Component({
  selector: 'app-paciente-historial-medico',
    standalone: true, 
 imports: [CommonModule, DatePipe],
  templateUrl: './paciente-historial-medico.component.html',
  styleUrls: ['./paciente-historial-medico.component.css']
})
export class PacienteHistorialMedicoComponent implements OnInit {
  entradasHistorial: EntradaHistorialMedico[] = [];
  pacienteId: string = '';
  cargando: boolean = true;
  error: string | null = null;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pacienteId = params['id']; 
      this.cargarHistorial();
    });
  }

  cargarHistorial(): void {
    this.cargando = true;
    this.error = null;

    this.apiService.get<EntradaHistorialMedico[]>(
      `patients/${this.pacienteId}/medical-history/entries`
    ).subscribe({
      next: (data) => {
        this.entradasHistorial = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error al cargar el historial médico';
        this.cargando = false;
        console.error('Error:', err);
      }
    });
  }
}