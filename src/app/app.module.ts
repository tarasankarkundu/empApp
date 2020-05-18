import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeeCardComponent } from './components/employee-list/employee-card/employee-card.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AdvancedSearchComponent } from './components/side-menu/advanced-search/advanced-search.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgxStarsModule } from 'ngx-stars';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeaderComponent,
    EmployeeCardComponent,
    EmployeeListComponent,
    AdvancedSearchComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
