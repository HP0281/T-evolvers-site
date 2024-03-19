import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWeComponent } from './card-we.component';

describe('CardWeComponent', () => {
  let component: CardWeComponent;
  let fixture: ComponentFixture<CardWeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
