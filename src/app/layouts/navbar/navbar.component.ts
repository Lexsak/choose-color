import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  dropDownListLinks: string[] = ['blog', 'dashboard'];
  isDropDown: boolean = false;

  DropDownListTrue() {
    this.isDropDown = true;
  }

  DropDownListFalse() {
    this.isDropDown = false;
  }
}
