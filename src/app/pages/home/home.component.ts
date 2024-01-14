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
  faqList = [
    {
      title: 'Can I cancel my subscription at any time?',
      answer: `Yes, you can easily cancel your subscription anytime through your account settings. For step-by-step guidance, check the 'Subscription' section. Have questions or need assistance? Contact our support in the 'Contact' section.`,
      showAnswer: false,
    },
    {
      title: 'Do you provide free product samples?',
      answer: `Nullam volutpat lobortis imperdiet. Praesent in ex vitae tellus accumsan accumsan. Nunc iaculis magna lacus, sit amet pretium risus vehicula sit amet.`,
      showAnswer: false,
    },
    {
      title: 'What payment methods do you accept?',
      answer: `Urabitur scelerisque sollicitudin elit nec euismod. Sed tincidunt blandit nibh a facilisis. Aliquam pulvinar eros id augue vulputate, id feugiat mi euismod. Morbi congue vehicula felis, `,
      showAnswer: false,
    },
    {
      title: 'How do I track my order?',
      answer: `Sed lorem nunc, fringilla sit amet ligula eu, dapibus sollicitudin nunc. Nunc in massa quis odio sollicitudin tempus id nec ipsum. Fusce venenatis, est vel rhoncus tincidunt, mauris ante posuere risus, iaculis sollicitudin odio eros sed magna. In maximus lobortis erat ullamcorper tempus. Donec ullamcorper turpis felis, sagittis efficitur elit ornare vitae.`,
      showAnswer: false,
    },
    {
      title: 'Is there a warranty for your products?',
      answer: `Duis laoreet nibh ut porta posuere. Mauris pharetra tincidunt arcu, sed placerat massa gravida at. Suspendisse iaculis, nunc ut fringilla placerat, ligula orci ullamcorper quam, eu luctus neque eros sit amet est. Curabitur id vulputate leo.`,
      showAnswer: false,
    },
  ];

  toggleAnswer(question: any){
     question.showAnswer = !question.showAnswer;
  };
}
