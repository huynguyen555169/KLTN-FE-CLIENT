import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComComponent } from './search-com.component';

describe('SearchComComponent', () => {
  let component: SearchComComponent;
  let fixture: ComponentFixture<SearchComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
