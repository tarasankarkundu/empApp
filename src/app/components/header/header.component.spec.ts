import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { EmployeeService } from 'src/app/services/employee-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let employeeServiceMock : EmployeeService;

  beforeEach(() => {

    return TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        HttpClientTestingModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    employeeServiceMock = TestBed.get(EmployeeService);
    spyOn(employeeServiceMock, "getTeams").and.returnValue(['Product Team', 'IDC']);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
