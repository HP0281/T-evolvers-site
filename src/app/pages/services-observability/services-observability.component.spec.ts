import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesObservabilityComponent } from './services-observability.component';

describe('ServicesObservabilityComponent', () => {
  let component: ServicesObservabilityComponent;
  let fixture: ComponentFixture<ServicesObservabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesObservabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesObservabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
