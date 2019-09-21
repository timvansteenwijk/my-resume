import { Component } from '@angular/core';
import { TESTPERSON } from '../mock-person';
import { Experience } from '../person';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
})

export class ExperienceComponent {
    experienceList: Experience[] = TESTPERSON.experience;
}
