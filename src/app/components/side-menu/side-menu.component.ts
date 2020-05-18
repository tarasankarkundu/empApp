import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  shouldShowAdvancedSearch: boolean = false;
  showAdvancedSearch(){
    console.log(this.shouldShowAdvancedSearch);
    this.shouldShowAdvancedSearch = !this.shouldShowAdvancedSearch;
    console.log(this.shouldShowAdvancedSearch);
  }
  constructor() { }

  ngOnInit() {
  }

}
