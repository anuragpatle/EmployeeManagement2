import { Component, OnInit } from '@angular/core';
import { DbRestAPI } from '@app/services/dbrestapi.service';
import { Router } from '@angular/router';
import { Employee } from '@app/models/Employee';


@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {

  constructor(private apiService: DbRestAPI,
    private router: Router) { }

  ngOnInit() {
  }




  employeeModel = new Employee("", "", "", "", "", "https://s3.amazonaws.com/uifaces/faces/twitter/kevka/128.jpg");

  onSubmit() {
    console.log(this.employeeModel);
    this.apiService.sendPostRequest(this.employeeModel).subscribe(
      data => {
        console.log('Success!: ', data);
        window.alert("complete");
        this.router.navigate(['/show_employees']);
      },
      error => console.error('Error!', error)), () => { window.alert("complete") }
  }

}
