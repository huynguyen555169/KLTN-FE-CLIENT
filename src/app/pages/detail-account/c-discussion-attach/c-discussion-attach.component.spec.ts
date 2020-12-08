import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDiscussionAttachComponent } from './c-discussion-attach.component';

describe('CDiscussionAttachComponent', () => {
  let component: CDiscussionAttachComponent;
  let fixture: ComponentFixture<CDiscussionAttachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CDiscussionAttachComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDiscussionAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
