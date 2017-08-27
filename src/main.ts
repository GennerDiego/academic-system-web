import './vendor.ts';

import 'bootstrap/dist/css/bootstrap.css';
import './resources/less/core.less';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { provideStore } from "@ngrx/store";
import {Reducer} from "./app/guards/reducer";
import {initialState} from "./app/models/state.model";

if (process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic(provideStore(Reducer, initialState)).
                                            bootstrapModule(AppModule);
