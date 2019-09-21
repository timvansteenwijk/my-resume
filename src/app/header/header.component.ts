import { Component } from '@angular/core';
import { TESTPERSON } from '../mock-person';
import { Person } from '../person';

@Component({
    selector: 'app-header',
    styleUrls: ['./header.component.css'],
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    person: Person = TESTPERSON;
}
