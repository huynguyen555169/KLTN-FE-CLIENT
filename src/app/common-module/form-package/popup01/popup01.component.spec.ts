import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Popup01Component } from './popup01.component';

describe('Popup01Component', () => {
  let component: Popup01Component;
  let fixture: ComponentFixture<Popup01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Popup01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Popup01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
