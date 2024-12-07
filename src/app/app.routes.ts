import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LibrosComponent } from './libros/libros.component';
import { FormularioLibrosComponent } from './formulario-libros/formulario-libros.component';
import { LibrosDigitalesComponent } from './libros-digitales/libros-digitales.component';
import { FormularioLibrosDigitalesComponent } from './formulario-libros-digitales/formulario-libros-digitales.component';



export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'administracion', component: AdministracionComponent },
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'formulario', component: FormularioComponent},
  { path: 'libros', component: LibrosComponent },
  { path: 'formulario-libros', component: FormularioLibrosComponent },
  { path: 'libros-digitales', component: LibrosDigitalesComponent },
  { path: 'formulario-libros-digitales', component: FormularioLibrosDigitalesComponent },

];
