import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee-service.service';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  deparments: string[];
  roles: string[];
  designations: string[];
  locations: string[];
  yojs: number[];
  experiences: number[];

  @Output() close = new EventEmitter<void>();

  advSearchForm: FormGroup;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.deparments = this.employeeService.getDepartments();
    this.roles = this.employeeService.getRoles();
    this.locations = this.employeeService.getLocations();
    this.yojs = this.employeeService.getYojs();
    this.designations = this.employeeService.getDesignations();
    this.advSearchForm = new FormGroup({
      'department': new FormControl(null),
      'roleType': new FormControl(null),
      'designation': new FormControl(null),
      'yoj': new FormControl(null),
      'team': new FormControl(null),
      'location': new FormControl(null)
    })
  }
  onSubmit(){
    this.employeeService.resetTeams.emit();
    this.employeeService.resetBlrOnly.emit();
    this.employeeService.advanceSearch.emit(this.advSearchForm.value);
    this.close.emit();
  }
  onClear(){
    this.advSearchForm.reset();
    this.close.emit();
  }

}
