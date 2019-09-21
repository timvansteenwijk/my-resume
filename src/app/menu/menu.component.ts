import { Component } from '@angular/core';
import { MenuItem } from './menu-item';
import { menu } from './menu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent {
    menu: MenuItem[] = menu;

    // constructor() {
    //     console.log(menu);
    // }
}
