import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProOutputComponent } from './pro-output.component';

describe('ProOutputComponent', () => {
  let component: ProOutputComponent;
  let fixture: ComponentFixture<ProOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
