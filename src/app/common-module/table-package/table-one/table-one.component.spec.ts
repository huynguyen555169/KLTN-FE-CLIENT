import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOneComponent } from './table-one.component';

describe('TableOneComponent', () => {
  let component: TableOneComponent;
  let fixture: ComponentFixture<TableOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
