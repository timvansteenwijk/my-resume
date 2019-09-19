import { Component } from '@angular/core';
import { TESTPERSON } from '../mock-person';

@Component ({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html'
})

export class HobbiesComponent {
    hobbies: string[] = TESTPERSON.hobbies;
}

