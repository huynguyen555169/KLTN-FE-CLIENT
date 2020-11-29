import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSixComponent } from './slide-six.component';

describe('SlideSixComponent', () => {
  let component: SlideSixComponent;
  let fixture: ComponentFixture<SlideSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
