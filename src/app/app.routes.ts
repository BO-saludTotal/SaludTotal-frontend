import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component'; // Ajusta el path si es necesario
import { RegistroComponent } from './paginas/registro/registro.component';
import { DashboardPacienteComponent } from './paginas/dashboard-paciente/dashboard-paciente.component';
import { DashboardAdministradorComponent } from './paginas/dashboard-administrador/dashboard-administrador.component';
import { DashboardDoctorComponent } from './paginas/dashboard-doctor/dashboard-doctor.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { ActualizarInfoPacienteComponent } from './paginas/actualizar-info-paciente/actualizar-info-paciente.component';
import { AutentificacionPacienteComponent } from './paginas/autentificacion-paciente/autentificacion-paciente.component';
import { CambiarContraPacienteComponent } from './paginas/cambiar-contra-paciente/cambiar-contra-paciente.component';
import { PacienteHistorialMedicoComponent } from './paginas/paciente-historial-medico/paciente-historial-medico.component';
import { SubirDocPacienteComponent } from './paginas/subir-doc-paciente/subir-doc-paciente.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    {path: 'registro', component: RegistroComponent},
    {path: 'dashboard-paciente', component: DashboardPacienteComponent},
    {path: 'dashboard-administrador', component: DashboardAdministradorComponent},
    {path: 'dashboard-doctor', component: DashboardDoctorComponent},
    {path: 'actualizar-info-paciente', component: ActualizarInfoPacienteComponent},
    {path: 'paciente-historial-medico', component: PacienteHistorialMedicoComponent},
    {path: 'autentificacion-paciente', component: AutentificacionPacienteComponent},
    {path: 'subir-doc-paciente', component: SubirDocPacienteComponent},
    {path: 'cambiar-contra-paciente', component: CambiarContraPacienteComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: PaginaNoEncontradaComponent},
];