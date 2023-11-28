import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByNameComponent } from './view-by-name.component';

describe('ViewByNameComponent', () => {
  let component: ViewByNameComponent;
  let fixture: ComponentFixture<ViewByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewByNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
