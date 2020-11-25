import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';
import {BasicInformationComponent} from './basic-information/basic-information.component';
import {BasicInformationUchredComponent} from './basic-information-uchred/basic-information-uchred.component';


const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'basicInformations', component: BasicInformationComponent},
  {path: 'uchredTable', component: BasicInformationUchredComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
