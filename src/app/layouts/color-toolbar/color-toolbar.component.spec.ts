import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorToolbarComponent } from './color-toolbar.component';

describe('ColorToolbarComponent', () => {
  let component: ColorToolbarComponent;
  let fixture: ComponentFixture<ColorToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorToolbarComponent]
    });
    fixture = TestBed.createComponent(ColorToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
