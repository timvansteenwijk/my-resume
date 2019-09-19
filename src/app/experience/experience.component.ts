import { Component } from '@angular/core';
import { TESTPERSON } from '../mock-person';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
})

export class ExperienceComponent {
    experience = TESTPERSON.experience;
}
