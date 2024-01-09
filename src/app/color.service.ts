import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  // Basic Colors
  textColor: string = '#06150c';
  backgroundColor: string = '#f7fdfa';
  primaryColor: string = '#3cc77b';
  secondaryColor: string = '#92cddf';
  accentColor: string = '#6d97d5';

  // Functions to set the colors
  setTextColor(color: string): void {
    this.textColor = color;
  }

  setBackgroundColor(color: string): void {
    this.backgroundColor = color;
  }

  setPrimaryColor(color: string): void {
    this.primaryColor = color;
  }

  setSecondaryColor(color: string): void {
    this.secondaryColor = color;
  }

  setAccentColor(color: string): void {
    this.accentColor = color;
  }
}
