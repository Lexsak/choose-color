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
      name: 'Mono',
      colors: ['#0b0a06', '#f9f8f4', '#a79d5b', '#9dcabc', '#7da6b9'],
    },
    { id: 2, name: 'Nono', colors: ['#000000', '#ffffff'] },
    { id: 3, name: 'Hono', colors: ['asfas', 'asfasf'] },
    { id: 4, name: 'Bono', colors: ['asfas', 'asfasf'] },
    { id: 5, name: 'Cono', colors: ['asfas', 'asfasf'] },
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

  changeColor(hax1: string, hax2: string, hax3: string, hax4: string, hax5: string) {
    this.colorService.setTextColor(hax1);
    this.colorService.setBackgroundColor(hax2);
    this.colorService.setPrimaryColor(hax3);
    this.colorService.setSecondaryColor(hax4);
    this.colorService.setAccentColor(hax5);
    this.isDropDown = false;
  }
}
