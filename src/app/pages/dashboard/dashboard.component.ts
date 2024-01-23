import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ColorService } from 'src/app/color.service';

interface MenuTilesDashboard {
  name: string;
  img: any;
  number: string;
}

interface Rectangles {
  firstHeight: string;
  secondHeight: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    private sanitizer: DomSanitizer,
    private colorService: ColorService
  ) {}

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

  getGradient() {
    return {
      background: `linear-gradient(to right, ${this.getPrimaryColor()} 10%, ${this.getAccentColor()})  text`,
      color: 'transparent',
    };
  }

  getTextStroke() {
    return {
      '-webkit-text-stroke': `1.5px ${this.getTextColor()}`,
    };
  }

  getRGBA(color: string, alpha: string) {
    const alphaNumber = parseFloat(alpha);
    const rgbaColor = this.hexOrRgbToRgba(color, alphaNumber);

    return rgbaColor;
  }

  hexOrRgbToRgba(color: string, alpha: number): string {
    // Sprawdź, czy kolor jest w formie HEX
    if (color[0] === '#') {
      // Konwersja koloru HEX na RGBA
      const hexColor = color.substring(1); // Usuń znak '#' z początku
      const bigint = parseInt(hexColor, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;

      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else if (color.startsWith('rgb')) {
      // Konwersja koloru RGB na RGBA
      const rgbValues = color.match(/\d+/g)?.map(Number); // Wyciągnij wartości liczbowe
      if (rgbValues && rgbValues.length === 3) {
        return `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${alpha})`;
      }
    }

    // Jeśli kolor nie jest ani w formie HEX, ani RGB, zwróć oryginalny kolor
    return color;
  }

  menuDashboard: MenuTilesDashboard[] = [
    {
      name: 'Schedule',
      img: this.sanitizer.bypassSecurityTrustHtml(
        `<svg height='32px' viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M216.1 408.1C207.6 418.3 192.4 418.3 183 408.1L119 344.1C109.7 335.6 109.7 320.4 119 311C128.4 301.7 143.6 301.7 152.1 311L200 358.1L295 263C304.4 253.7 319.6 253.7 328.1 263C338.3 272.4 338.3 287.6 328.1 296.1L216.1 408.1zM128 0C141.3 0 152 10.75 152 24V64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0zM400 192H48V448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192z"/></svg>`
      ),
      number: '',
    },
    {
      name: 'Team',
      img: this.sanitizer.bypassSecurityTrustHtml(
        `<svg height="32" viewBox="0 0 24 24" width="32" ><path d="M14.754 10C15.7205 10 16.504 10.7835 16.504 11.75V16.499C16.504 18.9848 14.4888 21 12.003 21C9.51712 21 7.50193 18.9848 7.50193 16.499V11.75C7.50193 10.7835 8.28543 10 9.25193 10H14.754ZM7.13128 9.99906C6.78183 10.4218 6.55636 10.9508 6.51057 11.5304L6.50193 11.75V16.499C6.50193 17.3456 6.69319 18.1476 7.03487 18.864C6.70577 18.953 6.35899 19 6.00124 19C3.79142 19 2 17.2086 2 14.9988V11.75C2 10.8318 2.70711 10.0788 3.60647 10.0058L3.75 10L7.13128 9.99906ZM16.8747 9.99906L20.25 10C21.2165 10 22 10.7835 22 11.75V15C22 17.2091 20.2091 19 18 19C17.6436 19 17.298 18.9534 16.9691 18.8659C17.2697 18.238 17.4538 17.5452 17.4951 16.8144L17.504 16.499V11.75C17.504 11.0847 17.2678 10.4747 16.8747 9.99906ZM12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3ZM18.5 4C19.8807 4 21 5.11929 21 6.5C21 7.88071 19.8807 9 18.5 9C17.1193 9 16 7.88071 16 6.5C16 5.11929 17.1193 4 18.5 4ZM5.5 4C6.88071 4 8 5.11929 8 6.5C8 7.88071 6.88071 9 5.5 9C4.11929 9 3 7.88071 3 6.5C3 5.11929 4.11929 4 5.5 4Z" /></svg>`
      ),
      number: '',
    },
    {
      name: 'Statistic',
      img: this.sanitizer.bypassSecurityTrustHtml(
        `<svg height="32" id="Layer_1_1_" style="enable-background:new 0 0 16 16;" version="1.1" viewBox="0 0 16 16" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect height="6" width="4" y="10"/><rect height="10" width="4" x="6" y="6"/><rect height="16" width="4" x="12"/></svg>`
      ),
      number: '',
    },
    {
      name: 'Settings',
      img: this.sanitizer.bypassSecurityTrustHtml(
        `<svg height="32" version="1.1" viewBox="0 0 20 20" width="32" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g  fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g  id="Core" transform="translate(-464.000000, -380.000000)"><g id="settings" transform="translate(464.000000, 380.000000)"><path d="M17.4,11 C17.4,10.7 17.5,10.4 17.5,10 C17.5,9.6 17.5,9.3 17.4,9 L19.5,7.3 C19.7,7.1 19.7,6.9 19.6,6.7 L17.6,3.2 C17.5,3.1 17.3,3 17,3.1 L14.5,4.1 C14,3.7 13.4,3.4 12.8,3.1 L12.4,0.5 C12.5,0.2 12.2,0 12,0 L8,0 C7.8,0 7.5,0.2 7.5,0.4 L7.1,3.1 C6.5,3.3 6,3.7 5.4,4.1 L3,3.1 C2.7,3 2.5,3.1 2.3,3.3 L0.3,6.8 C0.2,6.9 0.3,7.2 0.5,7.4 L2.6,9 C2.6,9.3 2.5,9.6 2.5,10 C2.5,10.4 2.5,10.7 2.6,11 L0.5,12.7 C0.3,12.9 0.3,13.1 0.4,13.3 L2.4,16.8 C2.5,16.9 2.7,17 3,16.9 L5.5,15.9 C6,16.3 6.6,16.6 7.2,16.9 L7.6,19.5 C7.6,19.7 7.8,19.9 8.1,19.9 L12.1,19.9 C12.3,19.9 12.6,19.7 12.6,19.5 L13,16.9 C13.6,16.6 14.2,16.3 14.7,15.9 L17.2,16.9 C17.4,17 17.7,16.9 17.8,16.7 L19.8,13.2 C19.9,13 19.9,12.7 19.7,12.6 L17.4,11 L17.4,11 Z M10,13.5 C8.1,13.5 6.5,11.9 6.5,10 C6.5,8.1 8.1,6.5 10,6.5 C11.9,6.5 13.5,8.1 13.5,10 C13.5,11.9 11.9,13.5 10,13.5 L10,13.5 Z" id="Shape"/></g></g></g></svg>`
      ),
      number: '',
    },
  ];

  tilesDashboard: MenuTilesDashboard[] = [
    {
      name: 'Sales',
      img: this.sanitizer.bypassSecurityTrustHtml(
        `<svg height="32" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M302.1 358.1C293.2 407.8 251.4 439.4 192 446.4V480c0 17.67-14.28 32-31.96 32S128 497.7 128 480v-34.96c-.4434-.0645-.8359-.0313-1.281-.0977c-26.19-3.766-53.69-13.2-77.94-21.53l-11.03-3.766C21.03 414 12.03 395.8 17.69 379.1s23.88-25.73 40.56-20.08l11.31 3.859c21.59 7.406 46.03 15.81 66.41 18.73c47.09 6.953 97.06-.8438 103.1-34.09c5.188-28.55-11.16-39.89-87.53-60.7L136.5 282.7C92.59 270.4 1.25 244.9 17.97 153C26.82 104.1 68.44 72.48 128 65.51V32c0-17.67 14.33-32 32.02-32S192 14.33 192 32v34.95c.4414 .0625 .8398 .0449 1.281 .1113c16.91 2.531 36.22 7.469 60.72 15.55c16.81 5.531 25.94 23.61 20.41 40.41c-5.531 16.77-23.69 25.86-40.41 20.38c-20.72-6.812-37.12-11.08-50.16-13.02C137 123.4 86.97 131.2 80.91 164.5C76.5 188.8 85.66 202 153.8 221l14.59 4.016C228.3 241.4 318.9 266.1 302.1 358.1z"/></svg>`
      ),
      number: '$5432',
    },
    {
      name: 'Products Sold',
      img: this.sanitizer.bypassSecurityTrustHtml(
        `<svg enable-background="new 0 0 48 48" height="32px" id="Layer_4" version="1.1" viewBox="0 0 48 48" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><polygon points="21.552,26.021 21.573,26.016 21.573,26.021 41.459,26.021 41.459,26.015 41.481,26.021    45.771,10.016 17.264,10.016  "/><polygon  points="18.646,30 11.21,2.707 0,2.707 0,6.75 8.166,6.75 15.59,34 15.614,33.993 15.614,34 48,34 48,30     "/><circle cx="41.771" cy="40"  r="4"/><circle cx="19.614" cy="40"  r="4"/></g></svg>`
      ),
      number: '178',
    },
    {
      name: 'New Users',
      img: this.sanitizer.bypassSecurityTrustHtml(
        `<svg height="32px" style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="info"/><g id="icons"><g id="user"><ellipse cx="12" cy="8" rx="5" ry="6"/><path d="M21.8,19.1c-0.9-1.8-2.6-3.3-4.8-4.2c-0.6-0.2-1.3-0.2-1.8,0.1c-1,0.6-2,0.9-3.2,0.9s-2.2-0.3-3.2-0.9    C8.3,14.8,7.6,14.7,7,15c-2.2,0.9-3.9,2.4-4.8,4.2C1.5,20.5,2.6,22,4.1,22h15.8C21.4,22,22.5,20.5,21.8,19.1z"/></g></g></svg>`
      ),
      number: '57',
    },
  ];

  rectangles: Rectangles[] = [
    { firstHeight: '40%', secondHeight: '50%' },
    { firstHeight: '20%', secondHeight: '30%' },
    { firstHeight: '70%', secondHeight: '20%' },
    { firstHeight: '60%', secondHeight: '55%' },
    { firstHeight: '90%', secondHeight: '100%' },
  ];
}
