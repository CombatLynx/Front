import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';
import {UchredComponent} from './uchred/uchred.component';


const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'uchred', component: UchredComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
