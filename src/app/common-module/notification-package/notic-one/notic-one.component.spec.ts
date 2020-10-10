import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticOneComponent } from './notic-one.component';

describe('NoticOneComponent', () => {
  let component: NoticOneComponent;
  let fixture: ComponentFixture<NoticOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
