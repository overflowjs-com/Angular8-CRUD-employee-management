import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employeelist/employeelist.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

const routes: Routes = [
  { path:"Employees", component:EmployeeListComponent },
  { path:"AddEmployee", component:AddemployeeComponent },
  { path:"EditEmployee/:id", component:EditemployeeComponent },
  { path:"**", redirectTo:'Employees' },
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    PanelModule,
    CardModule,
    InputTextModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
