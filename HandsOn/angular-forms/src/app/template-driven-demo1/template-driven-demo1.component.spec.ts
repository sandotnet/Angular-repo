import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenDemo1Component } from './template-driven-demo1.component';

describe('TemplateDrivenDemo1Component', () => {
  let component: TemplateDrivenDemo1Component;
  let fixture: ComponentFixture<TemplateDrivenDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenDemo1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDrivenDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
