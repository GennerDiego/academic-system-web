import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionService } from "../services/session.service";
import { Store } from "@ngrx/store";
import { IState } from "../models/state.model";
import { AlertService } from "../services/alert.service";

@Injectable()
export class AuthGuard implements CanActivate {

    private permissions: string;

    constructor(private router: Router,
        private store: Store<IState>,
        private alertService: AlertService,
        private sessionService: SessionService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            //localStorage.getItem('currentUser').
            let user = JSON.parse(localStorage.getItem('currentUser'));

            if (this.checkHavePermission(route, user.perfil)) {
                this.store.dispatch({ type: 'USER_LOGGED_IN' });
                return true;
            }
            else
                this.alertService.error('Você não tem permissão para acessar este recurso!');
                return false;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        this.store.dispatch({ type: 'USER_LOGGED_OUT' });
        return false;
    }

    private checkHavePermission(router: ActivatedRouteSnapshot, perfil: string[]) {


        if ((perfil.indexOf(router.data['ROLE']) != -1) || router.data['ROLE'] == '')
            return true;
        else
            return false;
    }
}