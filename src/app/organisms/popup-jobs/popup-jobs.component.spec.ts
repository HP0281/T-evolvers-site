import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupJobsComponent } from './popup-jobs.component';

describe('PopupJobsComponent', () => {
  let component: PopupJobsComponent;
  let fixture: ComponentFixture<PopupJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
