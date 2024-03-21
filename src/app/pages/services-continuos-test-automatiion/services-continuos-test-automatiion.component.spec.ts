import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesContinuosTestAutomatiionComponent } from './services-continuos-test-automatiion.component';

describe('ServicesContinuosTestAutomatiionComponent', () => {
  let component: ServicesContinuosTestAutomatiionComponent;
  let fixture: ComponentFixture<ServicesContinuosTestAutomatiionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesContinuosTestAutomatiionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesContinuosTestAutomatiionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
