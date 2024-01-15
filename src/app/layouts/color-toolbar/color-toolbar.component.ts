import { Component, HostListener, OnInit } from '@angular/core';
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
export class ColorToolbarComponent implements OnInit {
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
      name: 'Default',
      colors: ['#06150c', '#f7fdfa', '#6d97d5', '#92cddf', '#3cc77b'],
    },
    {
      id: 2,
      name: 'Blue',
      colors: ['#e7f3f1', '#091715', '#98e5db', '#189a8a', '#18efd4'],
    },

    {
      id: 3,
      name: 'Purple',
      colors: ['#eae7f7', '#07050f', '#a69ede', '#642876', '#c553c5'],
    },
    {
      id: 4,
      name: 'Green',
      colors: ['#f0f5e8', '#141a0b', '#c1d8a4', '#3e7532', '#56b554'],
    },
    {
      id: 5,
      name: 'Dark Yellow ',
      colors: ['#0b0a06', '#f9f8f4', '#a79d5b', '#9dcabc', '#7da6b9'],
    },
    {
      id: 6,
      name: 'Dark Pink',
      colors: ['#fce3f7', '#1d0318', '#f383d1', '#930f10', '#ea6c2d'],
    },
  ];

  isDropDown: boolean = false;
  activeColorPalette: ColorPalettes | null = null;

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

  ngOnInit() {
    // Ustaw domyślną opcję na "Default" przy inicjalizacji komponentu
    this.activeColorPalette =
      this.colorPalettes.find((palette) => palette.name === 'Default') ?? null;
  }

  changeColor(
    hax1: string,
    hax2: string,
    hax3: string,
    hax4: string,
    hax5: string,
    colorPalette: ColorPalettes
  ) {
    this.activeColorPalette = colorPalette;
    this.colorService.setTextColor(hax1);
    this.colorService.setBackgroundColor(hax2);
    this.colorService.setPrimaryColor(hax3);
    this.colorService.setSecondaryColor(hax4);
    this.colorService.setAccentColor(hax5);
    this.isDropDown = false;
  }

  // Copy

  isCopy: boolean = false;
  changeCopy(){
     this.isCopy = !this.isCopy;
  }
}
