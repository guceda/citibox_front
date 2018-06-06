import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBComponent } from './two-b.component';

describe('TwoBComponent', () => {
  let component: TwoBComponent;
  let fixture: ComponentFixture<TwoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
