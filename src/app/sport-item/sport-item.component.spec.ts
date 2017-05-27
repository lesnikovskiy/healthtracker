import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportItemComponent } from './sport-item.component';

describe('SportItemComponent', () => {
  let component: SportItemComponent;
  let fixture: ComponentFixture<SportItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
