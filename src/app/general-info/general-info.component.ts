import { Component } from '@angular/core';
import { TESTPERSON } from '../mock-person';
import { Person } from '../person';

@Component({
    selector: 'app-general-info',
    templateUrl: './general-info.component.html',
    styleUrls: ['./general-info.component.css']
})

export class GeneralInfoComponent {
    person: Person = TESTPERSON;
}
