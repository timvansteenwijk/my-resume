import { Component } from '@angular/core';
import { TESTPERSON } from '../mock-person';
import { Education } from '../person';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
})

export class EducationComponent {
    educationList: Education[] = TESTPERSON.education;
}
