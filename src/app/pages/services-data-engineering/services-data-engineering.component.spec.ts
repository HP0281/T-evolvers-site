import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDataEngineeringComponent } from './services-data-engineering.component';

describe('ServicesDataEngineeringComponent', () => {
  let component: ServicesDataEngineeringComponent;
  let fixture: ComponentFixture<ServicesDataEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesDataEngineeringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesDataEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
