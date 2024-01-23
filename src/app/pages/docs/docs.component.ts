import { Component } from '@angular/core';
import { ColorService } from 'src/app/color.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css'],
})
export class DocsComponent {
  constructor(private colorService: ColorService) {}

  getTextcolor() {
    return this.colorService.textColor;
  }
}
