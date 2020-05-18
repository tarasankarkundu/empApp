import { Injectable, EventEmitter } from '@angular/core';
import { Employee } from '../Models/emplyee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFilterService {

  filterEmployeeByType(employees: Employee[], type: string, val: any): Employee[]{
    return employees.filter((emp) => {
      if(typeof emp[type] === 'string') {
        return emp[type].indexOf(val) > -1;
      } else {
        return emp[type] === +val;
      }
    })
  }
  advancedFiler(employees:Employee[], searObj: any): Employee[] {
    return Object.keys(searObj).reduce((emp: any, key) => {
      if (searObj[key]){
        return this.filterEmployeeByType(emp, key, searObj[key] )
      } else {
        return emp;
      }
    }, employees)
  }
}
