import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNameComponent } from './first-name.component';

describe('FirstNameComponent', () => {
  let component: FirstNameComponent;
  let fixture: ComponentFixture<FirstNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstNameComponent]
    });
    fixture = TestBed.createComponent(FirstNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
