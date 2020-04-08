import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Employee } from '@app/models/Employee';


@Injectable({
  providedIn: 'root'
})
export class DbRestAPI {
  public first: string = "";
  public prev: string = "";
  public next: string = "";
  public last: string = "";

  private SERVER_EMPLOYEE_URL = 'http://localhost:3000/employees/';
  http: any;
  apiURL: string;

  constructor(private httpClient: HttpClient) { }

  // This is the response we will gonna recieve.
  //
  // <http://localhost:3000/employees/?_page=1&_limit=6>; rel="first"
  // , <http://localhost:3000/employees/?_page=2&//_limit=6>; rel="next"
  // , <http://localhost:3000/employees/?_page=2&_limit=6>; rel="last"
  parseLinkHeader(header: any) {

    if (header.length == 0) {
      return;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach(p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });

    this.first = links["first"];
    this.last = links["last"];
    this.prev = links["prev"];
    this.next = links["next"];
  }


  handleError(error: HttpErrorResponse) {

    let errorMsg = 'Unknown Error';
    if (error.error instanceof ErrorEvent) {
      // Client side error
      errorMsg = `Error: ${error.error.message}`;
    } else {
      errorMsg = `Error Status: ${error.status}
                  \n Error Message: ${error.error.message}`;
    }

    window.alert(errorMsg);
    return throwError(errorMsg);

  }


  // GET http://localhost:3000/employees?_page=1&_limit=6
  public sendGetRequest() {
    return this.httpClient
      .get(this.SERVER_EMPLOYEE_URL, {
        params: new HttpParams({ fromString: '_page=1&_limit=6' }),
        observe: 'response'
      })
      .pipe(retry(3), catchError(this.handleError), tap(res => {
        console.log(res.headers.get('Link'));
        this.parseLinkHeader(res.headers.get('Link'));
      }));
  }

  public sendGetRequestToUrl(url: string) {
    return this.httpClient.get(url, { observe: 'response' }).pipe(retry(3),
      catchError(this.handleError), tap(res => {
        console.log(res.headers.get('Link'));
        this.parseLinkHeader(res.headers.get('Link'));
      }));
  }


  public sendPostRequest(employee: Employee) {
    return this.httpClient.post<any>(this.SERVER_EMPLOYEE_URL, employee);
  }

  getEmployeeById(id): Observable<Employee> {
    return this.httpClient.get<Employee>(this.SERVER_EMPLOYEE_URL + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  searchEmployeesByKeyword(keyword: string) {
    return this.httpClient.get<Employee[]>(this.SERVER_EMPLOYEE_URL + '?_limit=6&q=' + keyword)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

}

