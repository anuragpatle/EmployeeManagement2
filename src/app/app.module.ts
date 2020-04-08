import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatGridListModule, MatInputModule
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ShowEmployeesComponent } from './manage_emps/show-employees/show-employees.component';
import { CreateEmpComponent } from './manage_emps/create-emp/create-emp.component';
import { ManageEmpComponent } from '@app/manage_emps/manage-emp/manage-emp.component';
import { EmpDetailsComponent } from './manage_emps/emp-details/emp-details.component';
import { SearchEmployeesComponent } from './manage_emps/search-employees/search-employees.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ManageEmpComponent,
    ShowEmployeesComponent,
    CreateEmpComponent,
    ManageEmpComponent,
    EmpDetailsComponent,
    SearchEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
