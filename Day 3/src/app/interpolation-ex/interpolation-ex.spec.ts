import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationEx } from './interpolation-ex';

describe('InterpolationEx', () => {
  let component: InterpolationEx;
  let fixture: ComponentFixture<InterpolationEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolationEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolationEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
