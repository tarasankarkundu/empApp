import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee-service.service';
import { Employee } from 'src/app/Models/emplyee';
import { EmployeeFilterService } from 'src/app/utils/employee-filter.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  empViewData: Employee[];
  blrOnly: boolean = false;
  constructor(private empoyeeService: EmployeeService, private employeeFilterService: EmployeeFilterService) { }

  ngOnInit() {
    this.employees = this.empoyeeService.getEmployees();
    this.empViewData = this.employees;
    if(!this.employees || !this.employees.length){
      this.empoyeeService.fetchEmployees().subscribe(emps => {
        this.employees = emps;
        this.empViewData = this.employees;
      })
    }
    this.empoyeeService.resetBlrOnly.subscribe(() => {
      this.blrOnly = false;
    });

    this.empoyeeService.advanceSearch.subscribe(data => {
       this.employees = this.employeeFilterService.advancedFiler(this.empoyeeService.getEmployees(), data);
       this.empViewData = this.employees;
    })

  }

  showBangEmployees(val: boolean){
    if( val){
      this.empViewData = this.employeeFilterService.filterEmployeeByType(this.empViewData, 'location', 'Bangalore');
    } else {
      this.empViewData = this.employees;
    }
  }

}
