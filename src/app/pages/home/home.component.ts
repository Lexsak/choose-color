import { Component } from '@angular/core';
import { ColorService } from 'src/app/color.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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
    const alphaNumber = parseFloat(alpha)
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

  // Pricing Section
  pricingIsTrue: boolean = true;
  pricingPro: number = 20;
  pricingBusiness: number = 100;

  isMonthly() {
    this.pricingIsTrue = true;
    this.pricingPro = 20;
    this.pricingBusiness = 100;
  }

  isYearly() {
    this.pricingIsTrue = false;
    this.pricingPro = 220;
    this.pricingBusiness = 1100;
  }

  


  // FAQ

  
}
