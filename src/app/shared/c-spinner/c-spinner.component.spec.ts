import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSpinnerComponent } from './c-spinner.component';

describe('CSpinnerComponent', () => {
  let component: CSpinnerComponent;
  let fixture: ComponentFixture<CSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
