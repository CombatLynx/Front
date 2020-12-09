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
import { UchredComponent } from './uchred/uchred.component';
import { AddEditUchComponent } from './uchred/add-edit-uch/add-edit-uch.component';
import { ShowUchComponent } from './uchred/show-uch/show-uch.component';
import { FiliationComponent } from './filiation/filiation.component';
import { AddEditFilComponent } from './filiation/add-edit-fil/add-edit-fil.component';
import { ShowFilComponent } from './filiation/show-fil/show-fil.component';
import { RepresentationComponent } from './representation/representation.component';
import { AddEditRepComponent } from './representation/add-edit-rep/add-edit-rep.component';
import { ShowRepComponent } from './representation/show-rep/show-rep.component';
import { ManagementComponent } from './management/management.component';
import { AddEditManComponent } from './management/add-edit-man/add-edit-man.component';
import { ShowManComponent } from './management/show-man/show-man.component';
import { VolumeComponent } from './volume/volume.component';
import { AddEditVolComponent } from './volume/add-edit-vol/add-edit-vol.component';
import { ShowVolComponent } from './volume/show-vol/show-vol.component';
import { VacComponent } from './vac/vac.component';
import { AddEditVacComponent } from './vac/add-edit-vac/add-edit-vac.component';
import { ShowVacComponent } from './vac/show-vac/show-vac.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    UchredComponent,
    AddEditUchComponent,
    ShowUchComponent,
    FiliationComponent,
    AddEditFilComponent,
    ShowFilComponent,
    RepresentationComponent,
    AddEditRepComponent,
    ShowRepComponent,
    ManagementComponent,
    AddEditManComponent,
    ShowManComponent,
    VolumeComponent,
    AddEditVolComponent,
    ShowVolComponent,
    VacComponent,
    AddEditVacComponent,
    ShowVacComponent
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
