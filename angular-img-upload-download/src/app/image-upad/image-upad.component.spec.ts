import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUpadComponent } from './image-upad.component';

describe('ImageUpadComponent', () => {
  let component: ImageUpadComponent;
  let fixture: ComponentFixture<ImageUpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageUpadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageUpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
