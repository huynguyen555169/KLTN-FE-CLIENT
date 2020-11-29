import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideFiveComponent } from './slide-five.component';

describe('SlideFiveComponent', () => {
  let component: SlideFiveComponent;
  let fixture: ComponentFixture<SlideFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
