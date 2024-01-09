import { Component } from '@angular/core';
import { ColorService } from 'src/app/color.service';

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

  // Colors from Toolbar

  constructor(private colorService: ColorService) {}

  getBackgroundColor(){
    return this.colorService.backgroundColor;
  };
}
