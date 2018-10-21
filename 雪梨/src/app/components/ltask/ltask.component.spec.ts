import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtaskComponent } from './ltask.component';

describe('LtaskComponent', () => {
  let component: LtaskComponent;
  let fixture: ComponentFixture<LtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
