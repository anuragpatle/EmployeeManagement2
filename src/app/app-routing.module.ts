import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CreateEmpComponent } from '@app/manage_emps/create-emp/create-emp.component';
import { ManageEmpComponent } from '@app/manage_emps/manage-emp/manage-emp.component';
import { ShowEmployeesComponent } from './manage_emps/show-employees/show-employees.component';
import { EmpDetailsComponent } from './manage_emps/emp-details/emp-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'home', component: ShowEmployeesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'manage_employees', component: ManageEmpComponent },
  { path: 'create_employees', component: CreateEmpComponent },
  { path: 'show_employees', component: ShowEmployeesComponent },
  { path: 'emp_details/:id', component: EmpDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
