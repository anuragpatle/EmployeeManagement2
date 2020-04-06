import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { DbRestAPI } from '@app/services/dbrestapi.service';
import { Employee } from '@app/models/Employee';
import { takeUntil } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  id = this.route.snapshot.params['id'];

  destroy$ = timer(5000);
  employees: Employee[];
  employeeData: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: DbRestAPI
  ) { }

  ngOnInit() {

    this.service.getEmployeeById(this.id).subscribe((data: {}) => {
      this.employeeData = data;
    });

  }

}
