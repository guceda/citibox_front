import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirteenComponent } from './thirteen.component';

describe('ThirteenComponent', () => {
  let component: ThirteenComponent;
  let fixture: ComponentFixture<ThirteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
