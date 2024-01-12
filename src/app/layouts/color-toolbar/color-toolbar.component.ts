import { Component, HostListener } from '@angular/core';
import { ColorService } from 'src/app/color.service';

interface ColorPalettes {
  id: number;
  name: string;
  colors: string[];
}

@Component({
  selector: 'app-color-toolbar',
  templateUrl: './color-toolbar.component.html',
  styleUrls: ['./color-toolbar.component.css'],
})
export class ColorToolbarComponent {
  color: string = '#808080';

  // Colors from Toolbar
  constructor(private colorService: ColorService) {}

  getTextColor() {
    return this.colorService.textColor;
  }

  getBackgroundColor() {
    return this.colorService.backgroundColor;
  }

  getPrimaryColor() {
    return this.colorService.primaryColor;
  }

  getSecondaryColor() {
    return this.colorService.secondaryColor;
  }

  getAccentColor() {
    return this.colorService.accentColor;
  }

  // Change Colors
  changeTextColor(event: any) {
    const color = event?.target?.value;
    this.colorService.setTextColor(color);
  }

  changeBackgroundColor(event: any) {
    const color = event?.target?.value;
    this.colorService.setBackgroundColor(color);
  }

  changePrimaryColor(event: any) {
    const color = event?.target?.value;
    this.colorService.setPrimaryColor(color);
  }

  changeSecondaryColor(event: any) {
    const color = event?.target?.value;
    this.colorService.setSecondaryColor(color);
  }

  changeAccentColor(event: any) {
    const color = event?.target?.value;
    this.colorService.setAccentColor(color);
  }

  // DropDown
  colorPalettes: ColorPalettes[] = [
    {
      id: 1,
      name: 'Blue',
      colors: ['#e7f3f1', '#091715', '#98e5db', '#189a8a', '#18efd4'],
    },
    {
      id: 2,
      name: 'Yellow Dark',
      colors: ['#0b0a06', '#f9f8f4', '#a79d5b', '#9dcabc', '#7da6b9'],
    },
    {
      id: 3,
      name: 'Pink',
      colors: ['#fce3f7', '#1d0318', '#f383d1', '#930f10', '#ea6c2d'],
    },
    {
      id: 4,
      name: 'Purple',
      colors: ['#eae7f7', '#07050f', '#a69ede', '#642876', '#c553c5'],
    },
    {
      id: 5,
      name: 'Green',
      colors: ['#f0f5e8', '#141a0b', '#c1d8a4', '#3e7532', '#56b554'],
    },
  ];

  isDropDown: boolean = false;

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    if (this.isDropDown) {
      const clickedElement = event.target as HTMLElement;

      // Sprawdź czy kliknięcie nie nastąpiło wewnątrz dropdown-container
      if (!clickedElement.closest('.dropdown-container')) {
        this.isDropDown = false;
      }
    }
  }

  changeDropDown() {
    this.isDropDown = !this.isDropDown;
  }

  changeColor(
    hax1: string,
    hax2: string,
    hax3: string,
    hax4: string,
    hax5: string
  ) {
    this.colorService.setTextColor(hax1);
    this.colorService.setBackgroundColor(hax2);
    this.colorService.setPrimaryColor(hax3);
    this.colorService.setSecondaryColor(hax4);
    this.colorService.setAccentColor(hax5);
    this.isDropDown = false;
  }
}
