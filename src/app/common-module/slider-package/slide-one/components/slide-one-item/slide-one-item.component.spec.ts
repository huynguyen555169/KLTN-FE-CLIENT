import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideOneItemComponent } from './slide-one-item.component';

describe('SlideOneItemComponent', () => {
  let component: SlideOneItemComponent;
  let fixture: ComponentFixture<SlideOneItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideOneItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideOneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
