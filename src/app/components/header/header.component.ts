import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  teams: string[];
  selectedTeam: string = 'select';
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.teams = this.employeeService.getTeams();
    this.employeeService.resetTeams.subscribe(() => {
      this.selectedTeam = 'select';
    })
  }

  onTeamSelect(event){
   let val = (event.target.value == 'select') ? null : event.target.value;
   this.employeeService.resetBlrOnly.emit();
   this.employeeService.advanceSearch.emit({'team': val})
  }
}
