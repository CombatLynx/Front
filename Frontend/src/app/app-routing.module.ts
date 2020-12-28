import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';
import {UchredComponent} from './uchred/uchred.component';
import {FiliationComponent} from './filiation/filiation.component';
import {RepresentationComponent} from './representation/representation.component';
import {ManagementComponent} from './management/management.component';
import {VolumeComponent} from './volume/volume.component';
import {VacComponent} from './vac/vac.component';
import {TeacherComponent} from './teacher/teacher.component';
import {FilialComponent} from './filial/filial.component';
import {LeaderComponent} from './leader/leader.component';
import {LeadertwoComponent} from './leadertwo/leadertwo.component';
import {StandartComponent} from './standart/standart.component';
import {PaidComponent} from './paid/paid.component';
import {InternationaldogComponent} from './internationaldog/internationaldog.component';
import {InternationalaccrComponent} from './internationalaccr/internationalaccr.component';
import {BasicInformationComponent} from './basic-information/basic-information.component';
import {CabComponent} from './cab/cab.component';
import {PracComponent} from './prac/prac.component';
import {LibComponent} from './lib/lib.component';
import {SportComponent} from './sport/sport.component';
import {MealComponent} from './meal/meal.component';
import {HealthComponent} from './health/health.component';
import {OvzComponent} from './ovz/ovz.component';
import {LinkovzComponent} from './linkovz/linkovz.component';
import {OvztwoComponent} from './ovztwo/ovztwo.component';
import {GrantComponent} from './grant/grant.component';
import {GrantinfoComponent} from './grantinfo/grantinfo.component';

const routes: Routes = [
  {path: 'basicInformations', component: BasicInformationComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'uchred', component: UchredComponent},
  {path: 'filiation', component: FiliationComponent},
  {path: 'representation', component: RepresentationComponent},
  {path: 'management', component: ManagementComponent},
  {path: 'volume', component: VolumeComponent},
  {path: 'vac', component: VacComponent},
  {path: 'leader', component: LeaderComponent},
  {path: 'leadersTwo', component: LeadertwoComponent},
  {path: 'filialLeader', component: FilialComponent},
  {path: 'teacher', component: TeacherComponent},
  {path: 'standart', component: StandartComponent},
  {path: 'paid', component: PaidComponent},
  {path: 'dog', component: InternationaldogComponent},
  {path: 'accr', component: InternationalaccrComponent},
  {path: 'cab', component: CabComponent},
  {path: 'prac', component: PracComponent},
  {path: 'lib', component: LibComponent},
  {path: 'sport', component: SportComponent},
  {path: 'meal', component: MealComponent},
  {path: 'health', component: HealthComponent},
  {path: 'ovz', component: OvzComponent},
  {path: 'link', component: LinkovzComponent},
  {path: 'ovztwo', component: OvztwoComponent},
  {path: 'grant', component: GrantComponent},
  {path: 'grantinfo', component: GrantinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
