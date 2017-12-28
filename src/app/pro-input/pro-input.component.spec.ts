import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProInputComponent } from './pro-input.component';

describe('ProInputComponent', () => {
  let component: ProInputComponent;
  let fixture: ComponentFixture<ProInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
