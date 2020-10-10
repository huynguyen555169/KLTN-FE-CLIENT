import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIntroComponent } from './card-intro.component';

describe('CardIntroComponent', () => {
  let component: CardIntroComponent;
  let fixture: ComponentFixture<CardIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
