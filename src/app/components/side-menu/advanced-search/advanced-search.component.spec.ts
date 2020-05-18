import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchComponent } from './advanced-search.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee-service.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdvancedSearchComponent', () => {
  let component: AdvancedSearchComponent;
  let fixture: ComponentFixture<AdvancedSearchComponent>;
  let employeeServiceMock : EmployeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedSearchComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports:[
        CommonModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    employeeServiceMock = TestBed.get(EmployeeService);
    spyOn(employeeServiceMock, 'getDepartments').and.returnValue(["IT", "HR"]);
    spyOn(employeeServiceMock, 'getRoles').and.returnValue(["FullTime", "PartTime"]);
    spyOn(employeeServiceMock, 'getLocations').and.returnValue(["Bangalore", "Pune"]);
    spyOn(employeeServiceMock, "getYojs").and.returnValue([2016,2019]);
    spyOn(employeeServiceMock, "getDesignations").and.returnValue(["Software Developer", "Archi"]);
    fixture = TestBed.createComponent(AdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
