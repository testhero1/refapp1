import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCenterHomeComponent } from './expense-center-home.component';

describe('ExpenseCenterHomeComponent', () => {
  let component: ExpenseCenterHomeComponent;
  let fixture: ComponentFixture<ExpenseCenterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseCenterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseCenterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
