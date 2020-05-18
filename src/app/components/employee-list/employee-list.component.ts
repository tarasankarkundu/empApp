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
  blrOnly: boolean;
  constructor(private empoyeeService: EmployeeService, private employeeFilterService: EmployeeFilterService) { }

  ngOnInit() {
    this.employees = this.empoyeeService.getEmployees();
    this.empViewData = this.employees;
    this.empoyeeService.advanceSearch.subscribe(data => {
      console.log(data);
      this.employees = this.employeeFilterService.advancedFiler(this.empoyeeService.getEmployees(), data);
      this.empViewData = this.employees;
    })

  }

  showBangEmployees(val){
    if( val){
      this.empViewData = this.employeeFilterService.filterEmployeeByType(this.employees, 'location', 'Bangalore');
    } else {
      this.empViewData = this.employees;
    }
  }

}
