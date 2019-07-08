import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employeeservice.service';
import { Router } from '@angular/router';
import { Employee } from '../entity/Employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html'
})
export class EmployeeListComponent implements OnInit {
  _listFilterBy: string;
  allEmployees: Employee[];
  filteredList: Employee[];

  // Service injected in constructor
  constructor(private employeeService:EmployeeService, private router: Router) { }

  // Gets filter by value from the search box
  get listFilterBy(): string {
    return this._listFilterBy;
  }

  // Sets filter by value from the search box
  set listFilterBy(value: string) {
    this._listFilterBy = value;
    this.filteredList = this._listFilterBy ? this.performFilter(this._listFilterBy) : this.allEmployees;
  }

  // Method to filter the employees on basis of filter by value
  performFilter(filterBy: string): Employee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.allEmployees.filter((employee: Employee) => employee.firstname.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
     employee.lastname.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  // Initializes all employees list from employee service
  ngOnInit() {
    this.allEmployees = this.employeeService.getAllEmployees();
    this.filteredList = this.allEmployees;
    this._listFilterBy = "";
  }

  // Method to add an employee to the list
  addEmployee(){
    this.router.navigate(["AddEmployee"]);
  }

  // Method to refresh the employee list after successful delete
  refreshList(){
    this.allEmployees = this.employeeService.getAllEmployees();
    this.filteredList = this.allEmployees;
  }
}
