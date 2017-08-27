import { Component, OnInit } from '@angular/core';
import { User } from "../models/user";
import { UserService } from "../services/user.service";

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'alunos.component.html'
})

export class AlunosComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
    }
    
}