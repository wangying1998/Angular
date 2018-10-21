import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtalkComponent } from './ltalk.component';

describe('LtalkComponent', () => {
  let component: LtalkComponent;
  let fixture: ComponentFixture<LtalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
