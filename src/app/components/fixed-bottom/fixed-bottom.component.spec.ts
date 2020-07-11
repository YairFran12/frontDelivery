import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedBottomComponent } from './fixed-bottom.component';

describe('FixedBottomComponent', () => {
  let component: FixedBottomComponent;
  let fixture: ComponentFixture<FixedBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
