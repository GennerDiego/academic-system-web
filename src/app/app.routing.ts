import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AlunosComponent } from "./alunos/alunos.component";
import { RegisterComponent } from "./register/register.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard], data: { ROLE: '' } },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'alunos', component: AlunosComponent, canActivate: [AuthGuard], data: { ROLE: 'ADMIN' } },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);