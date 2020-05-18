import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Employee } from '../Models/emplyee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient){}
  advanceSearch = new EventEmitter();
  resetTeams = new EventEmitter();
  resetBlrOnly = new EventEmitter();
  private teams: string[] = ['Product Team', 'IDC', 'OCBC', 'Radian', 'Rustify'];
  private departments: string[] = ['Front End Development', 'ML Engineering', 'Quality Analyst', 'Human Resourse Management', 'Research & Development'];
  private designations: string[] = ['Sr. UI Developer', 'Technical Lead', 'Developer', 'Architect', 'Quality Manager', 'Manager'];
  private roles: string[] = ['Full Time', 'Part Time'];
  private loations: string[] = ['Bangalore', 'Singapore', 'Mumbai'];
  private yojs: number[] = [2015,2016,2017,2018,2019,2020];
  private employees: Employee[] =[];

  fetchEmployees(){
    return this.http.get<Employee[]>('./data/employees.json').pipe(
      tap(emps => {
        this.employees = emps;
      })
    )
  }

  getEmployees(){
    return this.employees;
  }
  getTeams(){
    return this.teams;
  }
  getDepartments(){
    return this.departments;
  }
  getDesignations(){
    return this.designations;
  }
  getRoles(){
    return this.roles;
  }
  getLocations(){
    return this.loations;
  }
  getYojs(){
    return this.yojs;
  }

}
