import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmployeeService } from 'src/app/services/employee-service.service';
import { FormsModule } from '@angular/forms';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let employeeServiceMock : EmployeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmployeeListComponent,
        EmployeeCardComponent],
        schemas:[CUSTOM_ELEMENTS_SCHEMA],
        imports: [
          HttpClientTestingModule,
          FormsModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    employeeServiceMock = TestBed.get(EmployeeService);
    spyOn(employeeServiceMock, 'getEmployees').and.returnValue([{
      "name": "Andrew Bridgen",
      "designation": "manager",
      "rating": 4.5,
      "roleType": "Full Time",
      "experience": 4.5,
      "yoj": 2018,
      "team": "Rustify",
      "manager": "Lalit Agarwal",
      "tel": 7406559241,
      "email": "andrew@infrrd.ai",
      "dp":"andrew.png",
      "location": "Bangalore",
      "department": "Human Resourse Management"
    }]);
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
