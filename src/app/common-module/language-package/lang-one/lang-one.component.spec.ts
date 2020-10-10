import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangOneComponent } from './lang-one.component';

describe('LangOneComponent', () => {
  let component: LangOneComponent;
  let fixture: ComponentFixture<LangOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
