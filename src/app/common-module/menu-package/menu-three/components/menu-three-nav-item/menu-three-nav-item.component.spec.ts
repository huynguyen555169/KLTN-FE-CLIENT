import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuThreeNavItemComponent } from './menu-three-nav-item.component';

describe('MenuThreeNavItemComponent', () => {
  let component: MenuThreeNavItemComponent;
  let fixture: ComponentFixture<MenuThreeNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuThreeNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuThreeNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
