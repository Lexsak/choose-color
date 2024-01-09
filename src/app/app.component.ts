import { Component } from '@angular/core';
import { ColorService } from './color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'choose-color';

  // Colors from Toolbar

  constructor(private colorService: ColorService) {}

  getBackgroundColor(){
    return this.colorService.backgroundColor;
  };
}
