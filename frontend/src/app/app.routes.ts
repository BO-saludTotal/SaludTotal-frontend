import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { LoginPacienteComponent } from './paginas/login-paciente/login-paciente.component';
import { LoginAdministradorComponent } from './paginas/login-administrador/login-administrador.component';
import { LoginDoctorComponent } from './paginas/login-doctor/login-doctor.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { DashboardPacienteComponent } from './paginas/dashboard-paciente/dashboard-paciente.component';
import { DashboardAdministradorComponent } from './paginas/dashboard-administrador/dashboard-administrador.component';
import { DashboardDoctorComponent } from './paginas/dashboard-doctor/dashboard-doctor.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { ActualizarInfoPacienteComponent } from './paginas/actualizar-info-paciente/actualizar-info-paciente.component';
import { AutentificacionPacienteComponent } from './paginas/autentificacion-paciente/autentificacion-paciente.component';
import { CambiarContraPacienteComponent } from './paginas/cambiar-contra-paciente/cambiar-contra-paciente.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login-paciente', component: LoginPacienteComponent},
    {path: 'login-administrador', component: LoginAdministradorComponent},
    {path: 'login-doctor', component: LoginDoctorComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'dashboard-paciente', component: DashboardPacienteComponent},
    {path: 'dashboard-administrador', component: DashboardAdministradorComponent},
    {path: 'dashboard-doctor', component: DashboardDoctorComponent},
    {path: 'actualizar-info-paciente', component: ActualizarInfoPacienteComponent},
    {path: 'autentificacion-paciente', component: AutentificacionPacienteComponent},
    {path: 'cambiar-contra-paciente', component: CambiarContraPacienteComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: PaginaNoEncontradaComponent},
];