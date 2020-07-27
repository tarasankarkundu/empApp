import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardComponent } from './employee-card.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EmployeeCardComponent', () => {
  let component: EmployeeCardComponent;
  let fixture: ComponentFixture<EmployeeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCardComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCardComponent);
    component = fixture.componentInstance;
    component.empData={
      "name": "Andrew Bridgen",
      "designation": "manager",
      "rating": 4.5,
      "roleType": "Full Time",
      "experience": 4.5,
      "yoj": 2018,
      "team": "Rustify",
      "manager": "Lalit Agarwal",
      "tel": 7406559241,
      "email": "andrew@emp.ai",
      "dp":"andrew.png",
      "location": "Bangalore",
      "department": "Human Resourse Management"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
