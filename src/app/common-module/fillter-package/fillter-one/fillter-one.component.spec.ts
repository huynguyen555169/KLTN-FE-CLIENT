import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillterOneComponent } from './fillter-one.component';

describe('FillterOneComponent', () => {
  let component: FillterOneComponent;
  let fixture: ComponentFixture<FillterOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillterOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
