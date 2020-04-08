import { Component, OnInit } from '@angular/core';
import { Employee } from '@app/models/Employee';
import { DbRestAPI } from '@app/services/dbrestapi.service';

@Component({
  selector: 'app-search-employees',
  templateUrl: './search-employees.component.html',
  styleUrls: ['./search-employees.component.css']
})
export class SearchEmployeesComponent implements OnInit {

  searchText: string;
  employees: Employee[] = [];
  selectedEmployee: Employee;

  constructor(private dbRestApiService: DbRestAPI) { }

  ngOnInit() {



  }

  searchEmployees(searchTexts: string) {
    this.dbRestApiService.searchEmployeesByKeyword(searchTexts).subscribe((data) => {
      this.employees = data;
    });
  }

  setSelectedEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

}
