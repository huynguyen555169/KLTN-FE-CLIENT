import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SlideTwoItemComponent } from "./slide-two-item.component";

describe("SlideTwoItemComponent", () => {
  let component: SlideTwoItemComponent;
  let fixture: ComponentFixture<SlideTwoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlideTwoItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTwoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
