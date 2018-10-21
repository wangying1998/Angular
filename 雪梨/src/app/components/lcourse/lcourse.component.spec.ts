import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcourseComponent } from './lcourse.component';

describe('LcourseComponent', () => {
  let component: LcourseComponent;
  let fixture: ComponentFixture<LcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
