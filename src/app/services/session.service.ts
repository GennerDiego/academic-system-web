import { Injectable } from '@angular/core';
import { Observable, AsyncSubject } from "rxjs";
import { Store } from "@ngrx/store";
import { IState } from "../models/state.model";
import { AuthenticationService } from "./authentication.service";


@Injectable()
export class SessionService {
    constructor(private store: Store<IState>){
       store
            
            .filter((x: IState) => x.loggedIn)
           
            .map((x: IState) => Observable.timer(100000))
            
            .do((x: any) => console.log("Activity detected! Timer has reset to 5 seconds"))
            
            .switch()
            
            .subscribe((x: any) => {
                console.log("Inactivity interval expired! Dispatching timeout event")
                store.dispatch({ type: "ACTIVITY_TIMEOUT_OCCURRED" });
                localStorage.removeItem('currentUser');
            });
        
    }
}