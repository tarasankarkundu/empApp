import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/Models/emplyee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
  @Input() empData: Employee;
  constructor() { }

  ngOnInit() {
  }

}
