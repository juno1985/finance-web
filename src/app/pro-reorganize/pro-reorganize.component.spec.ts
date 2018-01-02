import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProReorganizeComponent } from './pro-reorganize.component';

describe('ProReorganizeComponent', () => {
  let component: ProReorganizeComponent;
  let fixture: ComponentFixture<ProReorganizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProReorganizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProReorganizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
