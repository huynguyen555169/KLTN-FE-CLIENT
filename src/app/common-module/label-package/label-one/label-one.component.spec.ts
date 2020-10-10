import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelOneComponent } from './label-one.component';

describe('LabelOneComponent', () => {
  let component: LabelOneComponent;
  let fixture: ComponentFixture<LabelOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
