import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckValidatecheckValidateComponent } from './check-validatecheck-validate.component';

describe('CheckValidatecheckValidateComponent', () => {
  let component: CheckValidatecheckValidateComponent;
  let fixture: ComponentFixture<CheckValidatecheckValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckValidatecheckValidateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckValidatecheckValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
