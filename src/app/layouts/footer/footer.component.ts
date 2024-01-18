import { Component } from '@angular/core';
import { ColorService } from 'src/app/color.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  // Colors from Toolbar
  constructor(private colorService: ColorService) {}

  getBackgroundColor() {
    return this.colorService.backgroundColor;
  }

  getTextColor() {
    return this.colorService.textColor;
  }
}
