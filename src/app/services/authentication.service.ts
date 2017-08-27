import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { SessionService } from "./session.service";
import { Store } from "@ngrx/store";
import { IState } from "../models/state.model";
import { RequestOptions, RequestMethod } from '@angular/http';
import { BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string): Observable<any> {

        let behaviorSubject: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let params = { username: username, password: password };
        let body = 'username=' + username + '&password=' + password;
        let credentials = "grant_type=authorization_code"
            + "&credentials=true"
            + "&scope=write"
            + "redirect_uri=" + encodeURI('http://localhost:8082/seguranca/logar');
        this.http.post('http://localhost:8082/seguranca/logar', body, { headers: headers })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                debugger
                let user = response.json();
                if (user && user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            })
            .catch((error: any, caught: any) => {
                behaviorSubject.error(error);
                return behaviorSubject.filter((x) => { return x != undefined });
            })
            .subscribe(data => {

                behaviorSubject.next(data);
            });

        return behaviorSubject.filter((x) => { return x != undefined });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}