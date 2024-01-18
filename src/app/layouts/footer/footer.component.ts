import { Component } from '@angular/core';
import { ColorService } from 'src/app/color.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentYear: number;

  // Colors from Toolbar
  constructor(private colorService: ColorService) {
    this.currentYear = new Date().getFullYear();
  }

  getBackgroundColor() {
    return this.colorService.backgroundColor;
  }

  getTextColor() {
    return this.colorService.textColor;
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
}
