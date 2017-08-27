import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';

// used to create fake backend
import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { AlertComponent } from "./directives/alert.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AlunosComponent } from "./alunos/alunos.component";
import { AuthGuard } from "./guards/auth.guard";
import { AlertService } from "./services/alert.service";
import { AuthenticationService } from "./services/authentication.service";
import { UserService } from "./services/user.service";
import { MockBackend } from "@angular/http/testing";
import { SessionService } from "./services/session.service";
import {provideStore} from "@ngrx/store";
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlunosComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        SessionService,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }