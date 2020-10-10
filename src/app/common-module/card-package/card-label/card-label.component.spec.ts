import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLabelComponent } from './card-label.component';

describe('CardLabelComponent', () => {
  let component: CardLabelComponent;
  let fixture: ComponentFixture<CardLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
