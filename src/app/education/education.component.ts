import { Component } from '@angular/core';
import { TESTPERSON } from '../mock-person';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
})

export class EducationComponent {
    education = TESTPERSON.education;
}
