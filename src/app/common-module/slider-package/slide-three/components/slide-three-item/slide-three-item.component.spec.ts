import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideThreeItemComponent } from './slide-three-item.component';

describe('SlideThreeItemComponent', () => {
  let component: SlideThreeItemComponent;
  let fixture: ComponentFixture<SlideThreeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideThreeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideThreeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
