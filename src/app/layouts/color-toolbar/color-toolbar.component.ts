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

  constructor(private colorService: ColorService) {}


  getBackgroundColor() {
    return this.colorService.backgroundColor;
  }

  getTextColor(){
    return this.colorService.textColor;
  };

  changeTextColor(event: any) {
    const color = event?.target?.value;
    this.colorService.setTextColor(color);
  }

  // DropDown
  colorPalettes: ColorPalettes[] = [
    { id: 1, name: 'Mono', colors: ['#ffffff', '#dddddd'] },
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

  changeColor(hax1: string, hax2: string) {
    this.colorService.setTextColor(hax1);
    this.colorService.setSecondaryColor(hax2);
    this.isDropDown = false;
  }
}
