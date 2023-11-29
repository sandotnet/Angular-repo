import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallmoviesComponent } from './getallmovies.component';

describe('GetallmoviesComponent', () => {
  let component: GetallmoviesComponent;
  let fixture: ComponentFixture<GetallmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallmoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
