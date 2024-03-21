import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSoftwareDevelopmentComponent } from './services-software-development.component';

describe('ServicesSoftwareDevelopmentComponent', () => {
  let component: ServicesSoftwareDevelopmentComponent;
  let fixture: ComponentFixture<ServicesSoftwareDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesSoftwareDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesSoftwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
