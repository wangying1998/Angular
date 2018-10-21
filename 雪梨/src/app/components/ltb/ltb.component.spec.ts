import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtbComponent } from './ltb.component';

describe('LtbComponent', () => {
  let component: LtbComponent;
  let fixture: ComponentFixture<LtbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
