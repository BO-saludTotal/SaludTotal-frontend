import { Routes } from '@angular/router';
import { LoginPatientComponent } from './pages/auth/login-patient/login-patient.component';

export const routes: Routes = [
  { 
    path: 'login/paciente',
    component: LoginPatientComponent
  },
  { path: '', pathMatch: 'full', redirectTo: '' }, // Página principal
  { path: '**', redirectTo: '' } // Redirección para rutas no encontradas
];