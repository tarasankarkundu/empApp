import { Injectable, EventEmitter } from '@angular/core';
import { Employee } from '../Models/emplyee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  advanceSearch = new EventEmitter();
  private teams: string[] = ['Product Team', 'IDC', 'OCBC', 'Radian', 'Rustify'];
  private departments: string[] = ['Front End Development', 'ML Engineering', 'Quality Analyst', 'Human Resourse Management', 'Research & Development'];
  private designations: string[] = ['Sr. UI Developer', 'Technical Lead', 'Developer', 'Architect', 'Quality Manager', 'Manager'];
  private roles: string[] = ['Full Time', 'Part Time'];
  private loations: string[] = ['Bangalore', 'Singapore', 'Mumbai'];
  private yojs: number[] = [2015,2016,2017,2018,2019,2020];
  private employees: Employee[] = [
    {
      name: 'Andrew Bridgen',
      designation:'Sr. UI Developer',
      rating: 3.5,
      roleType: 'Full Time',
      experience: 3.5,
      yoj: 2017,
      team: 'OCBC Singapore',
      manager: 'Lalit Agarwal',
      tel: 7406559241,
      email: 'andrew@infrrd.ai',
      dp:'andrew.png',
      location: 'Singapore',
      department: 'Front End Development'
    },
    {
      name: 'Andrew Bridgen',
      designation:'Sr. UI Developer',
      rating: 3.5,
      roleType: 'Full Time',
      experience: 3.5,
      yoj: 2017,
      team: 'Product Team',
      manager: 'Lalit Agarwal',
      tel: 7406559241,
      email: 'andrew@infrrd.ai',
      dp:'andrew.png',
      location: 'Bangalore',
      department: 'ML Engineering'
    },
    {
      name: 'Andrew Bridgen',
      designation:'Quality Manager',
      rating: 3.5,
      roleType: 'Full Time',
      experience: 3.5,
      yoj: 2017,
      team: 'OCBC Singapore',
      manager: 'Lalit Agarwal',
      tel: 7406559241,
      email: 'andrew@infrrd.ai',
      dp:'andrew.png',
      location: 'Singapore',
      department: 'Quality Analyst'
    },
    {
      name: 'Andrew Bridgen',
      designation:'Architect',
      rating: 3.5,
      roleType: 'Full Time',
      experience: 3.5,
      yoj: 2017,
      team: 'IDC',
      manager: 'Lalit Agarwal',
      tel: 7406559241,
      email: 'andrew@infrrd.ai',
      dp:'andrew.png',
      location: 'Bangalore',
      department: 'Front End Development'
    },
    {
      name: 'Andrew Bridgen',
      designation:'Developer',
      rating: 4,
      roleType: 'Part Time',
      experience: 4.5,
      yoj: 2016,
      team: 'IDC',
      manager: 'Lalit Agarwal',
      tel: 7406559241,
      email: 'andrew@infrrd.ai',
      dp:'andrew.png',
      location: 'Mumbai',
      department: 'Front End Development'
    },
    {
      name: 'Andrew Bridgen',
      designation:'Technical Lead',
      rating: 3,
      roleType: 'Part Time',
      experience: 5.5,
      yoj: 2015,
      team: 'Radian',
      manager: 'Lalit Agarwal',
      tel: 7406559241,
      email: 'andrew@infrrd.ai',
      dp:'andrew.png',
      location: 'Bangalore',
      department: 'Front End Development'
    },
    {
      name: 'Andrew Bridgen',
      designation:'Technical Lead',
      rating: 3,
      roleType: 'Full Time',
      experience: 1.5,
      yoj: 2019,
      team: 'Rustify',
      manager: 'Lalit Agarwal',
      tel: 7406559241,
      email: 'andrew@infrrd.ai',
      dp:'andrew.png',
      location: 'Bangalore',
      department: 'Research & Development'
    },
    {
      name: 'Andrew Bridgen',
      designation:'Manager',
      rating: 4.5,
      roleType: 'Full Time',
      experience: 4.5,
      yoj: 2018,
      team: 'Rustify',
      manager: 'Lalit Agarwal',
      tel: 7406559241,
      email: 'andrew@infrrd.ai',
      dp:'andrew.png',
      location: 'Bangalore',
      department: 'Human Resourse Management'
    }
  ];

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
