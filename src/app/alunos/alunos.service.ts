import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    getPermission(){
        return 'ADMIN';
    }
}