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
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { AddEditBaseComponent } from './basic-information/add-edit-base/add-edit-base.component';
import { ShowBaseComponent } from './basic-information/show-base/show-base.component';
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
import { TeacherComponent } from './teacher/teacher.component';
import { AddEditTeachComponent } from './teacher/add-edit-teach/add-edit-teach.component';
import { ShowTeachComponent } from './teacher/show-teach/show-teach.component';
import { FilialComponent } from './filial/filial.component';
import { AddEditFilialComponent } from './filial/add-edit-filial/add-edit-filial.component';
import { ShowFilialComponent } from './filial/show-filial/show-filial.component';
import { LeaderComponent } from './leader/leader.component';
import { AddEditLeaderComponent } from './leader/add-edit-leader/add-edit-leader.component';
import { ShowLeaderComponent } from './leader/show-leader/show-leader.component';
import { LeadertwoComponent } from './leadertwo/leadertwo.component';
import { AddEditLeadertwoComponent } from './leadertwo/add-edit-leadertwo/add-edit-leadertwo.component';
import { ShowLeadertwoComponent } from './leadertwo/show-leadertwo/show-leadertwo.component';
import { StandartComponent } from './standart/standart.component';
import { AddEditStanComponent } from './standart/add-edit-stan/add-edit-stan.component';
import { ShowStanComponent } from './standart/show-stan/show-stan.component';
import { PaidComponent } from './paid/paid.component';
import { AddEditPaidComponent } from './paid/add-edit-paid/add-edit-paid.component';
import { ShowPaidComponent } from './paid/show-paid/show-paid.component';
import { InternationaldogComponent } from './internationaldog/internationaldog.component';
import { AddEditDogComponent } from './internationaldog/add-edit-dog/add-edit-dog.component';
import { ShowDogComponent } from './internationaldog/show-dog/show-dog.component';
import { InternationalaccrComponent } from './internationalaccr/internationalaccr.component';
import { AddEditAccrComponent } from './internationalaccr/add-edit-accr/add-edit-accr.component';
import { ShowAccrComponent } from './internationalaccr/show-accr/show-accr.component';
import { CabComponent } from './cab/cab.component';
import { AddEditCabComponent } from './cab/add-edit-cab/add-edit-cab.component';
import { ShowCabComponent } from './cab/show-cab/show-cab.component';
import { AddEditPracComponent } from './prac/add-edit-prac/add-edit-prac.component';
import { ShowPracComponent } from './prac/show-prac/show-prac.component';
import { PracComponent } from './prac/prac.component';
import { LibComponent } from './lib/lib.component';
import { AddEditLibComponent } from './lib/add-edit-lib/add-edit-lib.component';
import { ShowLibComponent } from './lib/show-lib/show-lib.component';
import { SportComponent } from './sport/sport.component';
import { AddEditSportComponent } from './sport/add-edit-sport/add-edit-sport.component';
import { ShowSportComponent } from './sport/show-sport/show-sport.component';
import { MealComponent } from './meal/meal.component';
import { AddEditMealComponent } from './meal/add-edit-meal/add-edit-meal.component';
import { ShowMealComponent } from './meal/show-meal/show-meal.component';
import { HealthComponent } from './health/health.component';
import { AddEditHealthComponent } from './health/add-edit-health/add-edit-health.component';
import { ShowHealthComponent } from './health/show-health/show-health.component';
import { OvzComponent } from './ovz/ovz.component';
import { AddEditOvzComponent } from './ovz/add-edit-ovz/add-edit-ovz.component';
import { ShowOvzComponent } from './ovz/show-ovz/show-ovz.component';
import { LinkovzComponent } from './linkovz/linkovz.component';
import { AddEditLinkComponent } from './linkovz/add-edit-link/add-edit-link.component';
import { ShowLinkComponent } from './linkovz/show-link/show-link.component';
import { OvztwoComponent } from './ovztwo/ovztwo.component';
import { AddEditOvztwoComponent } from './ovztwo/add-edit-ovztwo/add-edit-ovztwo.component';
import { ShowOvztwoComponent } from './ovztwo/show-ovztwo/show-ovztwo.component';
import { GrantComponent } from './grant/grant.component';
import { AddEditGrantComponent } from './grant/add-edit-grant/add-edit-grant.component';
import { ShowGrantsComponent } from './grant/show-grant/show-grant.component';
import { GrantinfoComponent } from './grantinfo/grantinfo.component';
import { AddEditGinfoComponent } from './grantinfo/add-edit-ginfo/add-edit-ginfo.component';
import { ShowGinfoComponent } from './grantinfo/show-ginfo/show-ginfo.component';
import { ActComponent } from './act/act.component';
import { AddEditActComponent } from './act/add-edit-act/add-edit-act.component';
import { ShowActComponent } from './act/show-act/show-act.component';
import { AddEditJobComponent } from './job/add-edit-job/add-edit-job.component';
import { ShowJobsComponent } from './job/show-job/show-job.component';
import { JobComponent } from './job/job.component';
import { GosComponent } from './gos/gos.component';
import { AddEditGosComponent } from './gos/add-edit-gos/add-edit-gos.component';
import { ShowGosComponent } from './gos/show-gos/show-gos.component';
import { ProfComponent } from './prof/prof.component';
import { AddEditProfComponent } from './prof/add-edit-prof/add-edit-prof.component';
import { ShowProfComponent } from './prof/show-prof/show-prof.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicInformationComponent,
    AddEditBaseComponent,
    ShowBaseComponent,
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
    ShowVacComponent,
    TeacherComponent,
    AddEditTeachComponent,
    ShowTeachComponent,
    FilialComponent,
    AddEditFilialComponent,
    ShowFilialComponent,
    LeaderComponent,
    AddEditLeaderComponent,
    ShowLeaderComponent,
    LeadertwoComponent,
    AddEditLeadertwoComponent,
    ShowLeadertwoComponent,
    StandartComponent,
    AddEditStanComponent,
    ShowStanComponent,
    PaidComponent,
    AddEditPaidComponent,
    ShowPaidComponent,
    InternationaldogComponent,
    AddEditDogComponent,
    ShowDogComponent,
    InternationalaccrComponent,
    AddEditAccrComponent,
    ShowAccrComponent,
    CabComponent,
    AddEditCabComponent,
    ShowCabComponent,
    AddEditPracComponent,
    ShowPracComponent,
    PracComponent,
    LibComponent,
    AddEditLibComponent,
    ShowLibComponent,
    SportComponent,
    AddEditSportComponent,
    ShowSportComponent,
    MealComponent,
    AddEditMealComponent,
    ShowMealComponent,
    HealthComponent,
    AddEditHealthComponent,
    ShowHealthComponent,
    OvzComponent,
    AddEditOvzComponent,
    ShowOvzComponent,
    LinkovzComponent,
    AddEditLinkComponent,
    ShowLinkComponent,
    OvztwoComponent,
    AddEditOvztwoComponent,
    ShowOvztwoComponent,
    GrantComponent,
    AddEditGrantComponent,
    ShowGrantsComponent,
    GrantinfoComponent,
    AddEditGinfoComponent,
    ShowGinfoComponent,
    ActComponent,
    AddEditActComponent,
    ShowActComponent,
    AddEditJobComponent,
    ShowJobsComponent,
    JobComponent,
    GosComponent,
    AddEditGosComponent,
    ShowGosComponent,
    ProfComponent,
    AddEditProfComponent,
    ShowProfComponent
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
