import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOneComponent } from './search-one.component';

describe('SearchOneComponent', () => {
  let component: SearchOneComponent;
  let fixture: ComponentFixture<SearchOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
