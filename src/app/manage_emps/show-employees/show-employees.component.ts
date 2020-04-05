import { Component, OnInit } from '@angular/core';
import { DbRestAPI } from '@app/services/dbrestapi.service';
import { timer } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'


@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {

  constructor(private dbRestApiService: DbRestAPI, private router: Router, ) { }

  // goToEmpDetails(empId: string) {
  //   this.router.navigate(['emp_details', empId]);
  // }

  destroy$ = timer(5000);

  employees = [];

  ngOnInit() {

    this.dbRestApiService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.employees = res.body;
    })
  }

  public firstPage() {
    this.employees = [];
    this.dbRestApiService.sendGetRequestToUrl(this.dbRestApiService.first).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.employees = res.body;
    })
  }
  public previousPage() {

    if (this.dbRestApiService.prev !== undefined && this.dbRestApiService.prev !== '') {
      this.employees = [];
      this.dbRestApiService.sendGetRequestToUrl(this.dbRestApiService.prev).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.employees = res.body;
      })
    }
  }
  public nextPage() {
    if (this.dbRestApiService.next !== undefined && this.dbRestApiService.next !== '') {
      this.employees = [];
      this.dbRestApiService.sendGetRequestToUrl(this.dbRestApiService.next).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.employees = res.body;
      })
    }
  }
  public lastPage() {
    this.employees = [];
    this.dbRestApiService.sendGetRequestToUrl(this.dbRestApiService.last).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.employees = res.body;
    })
  }


}





