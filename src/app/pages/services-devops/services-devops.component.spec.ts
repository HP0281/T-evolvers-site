import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDevopsComponent } from './services-devops.component';

describe('ServicesDevopsComponent', () => {
  let component: ServicesDevopsComponent;
  let fixture: ComponentFixture<ServicesDevopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesDevopsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesDevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
