import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistPagerComponent } from './hist-pager.component';

describe('HistPagerComponent', () => {
  let component: HistPagerComponent;
  let fixture: ComponentFixture<HistPagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistPagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
