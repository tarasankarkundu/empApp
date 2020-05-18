import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AdvancedSearchComponent } from './components/side-menu/advanced-search/advanced-search.component';
import { EmployeeCardComponent } from './components/employee-list/employee-card/employee-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxStarsModule } from 'ngx-stars';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        CommonModule,
        NgxStarsModule,
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        SideMenuComponent,
        AdvancedSearchComponent,
        EmployeeCardComponent,
        ContactComponent,
        EmployeeListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'empApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('empApp');
  });
});
