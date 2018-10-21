import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtzComponent } from './ltz.component';

describe('LtzComponent', () => {
  let component: LtzComponent;
  let fixture: ComponentFixture<LtzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
