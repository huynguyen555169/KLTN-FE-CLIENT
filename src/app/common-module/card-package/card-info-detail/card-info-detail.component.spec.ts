import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoDetailComponent } from './card-info-detail.component';

describe('CardInfoDetailComponent', () => {
  let component: CardInfoDetailComponent;
  let fixture: ComponentFixture<CardInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
