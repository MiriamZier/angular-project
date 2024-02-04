import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNameComponent } from './last-name.component';

describe('LastNameComponent', () => {
  let component: LastNameComponent;
  let fixture: ComponentFixture<LastNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastNameComponent]
    });
    fixture = TestBed.createComponent(LastNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
