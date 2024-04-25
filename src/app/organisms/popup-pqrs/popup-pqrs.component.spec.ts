import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPqrsComponent } from './popup-pqrs.component';

describe('PopupPqrsComponent', () => {
  let component: PopupPqrsComponent;
  let fixture: ComponentFixture<PopupPqrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupPqrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupPqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
