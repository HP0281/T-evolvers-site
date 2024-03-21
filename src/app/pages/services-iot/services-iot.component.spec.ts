import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesIOTComponent } from './services-iot.component';

describe('ServicesIOTComponent', () => {
  let component: ServicesIOTComponent;
  let fixture: ComponentFixture<ServicesIOTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesIOTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesIOTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
