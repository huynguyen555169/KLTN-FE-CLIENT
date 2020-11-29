import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMaxMinTwoComponent } from './search-max-min-two.component';

describe('SearchMaxMinTwoComponent', () => {
  let component: SearchMaxMinTwoComponent;
  let fixture: ComponentFixture<SearchMaxMinTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMaxMinTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMaxMinTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
