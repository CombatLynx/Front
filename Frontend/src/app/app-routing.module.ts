import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';
import {UchredComponent} from './uchred/uchred.component';
import {FiliationComponent} from './filiation/filiation.component';
import {RepresentationComponent} from './representation/representation.component';
import {ManagementComponent} from './management/management.component';
import {VolumeComponent} from './volume/volume.component';


const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'uchred', component: UchredComponent},
  {path: 'filiation', component: FiliationComponent},
  {path: 'representation', component: RepresentationComponent},
  {path: 'management', component: ManagementComponent},
  {path: 'volume', component: VolumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
