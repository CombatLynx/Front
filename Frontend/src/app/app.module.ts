import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { AddEditBaseComponent } from './basic-information/add-edit-base/add-edit-base.component';
import { ShowBaseComponent } from './basic-information/show-base/show-base.component';
import { BasicInformationUchredComponent } from './basic-information-uchred/basic-information-uchred.component';
import { AddEditUchredComponent } from './basic-information-uchred/add-edit-uchred/add-edit-uchred.component';
import { ShowUchredComponent } from './basic-information-uchred/show-uchred/show-uchred.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    BasicInformationComponent,
    AddEditBaseComponent,
    ShowBaseComponent,
    BasicInformationUchredComponent,
    AddEditUchredComponent,
    ShowUchredComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
