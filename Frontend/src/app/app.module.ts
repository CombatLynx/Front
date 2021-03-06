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
import { AddEditInfComponent } from './inf/add-edit-inf/add-edit-inf.component';
import { ShowInfComponent } from './inf/show-inf/show-inf.component';
import { InfComponent } from './inf/inf.component';
import { AdmisComponent } from './admis/admis.component';
import { AddEditAdmisComponent } from './admis/add-edit-admis/add-edit-admis.component';
import { ShowAdmisComponent } from './admis/show-admis/show-admis.component';
import { PerevComponent } from './perev/perev.component';
import { AddEditPerevComponent } from './perev/add-edit-perev/add-edit-perev.component';
import { ShowPerevComponent } from './perev/show-perev/show-perev.component';
import { ObrazComponent } from './obraz/obraz.component';
import { AddEditObrazComponent } from './obraz/add-edit-obraz/add-edit-obraz.component';
import { ShowObrazComponent } from './obraz/show-obraz/show-obraz.component';
import { PracticesComponent } from './practices/practices.component';
import { AddEditPracticesComponent } from './practices/add-edit-practices/add-edit-practices.component';
import { ShowPracticesComponent } from './practices/show-practices/show-practices.component';
import { SciencsComponent } from './sciencs/sciencs.component';
import { AddEditSciencsComponent } from './sciencs/add-edit-sciencs/add-edit-sciencs.component';
import { ShowSciencsComponent } from './sciencs/show-sciencs/show-sciencs.component';
import { SvedorgComponent } from './svedorg/svedorg.component';
import { AddEditSvedorgComponent } from './svedorg/add-edit-svedorg/add-edit-svedorg.component';
import { ShowSvedorgComponent } from './svedorg/show-svedorg/show-svedorg.component';
import { AddEditFacilitiesComponent } from './facilities/add-edit-facilities/add-edit-facilities.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ShowFacilitiesComponent } from './facilities/show-facilities/show-facilities.component';
import { ObjpractsComponent } from './objpracts/objpracts.component';
import { AddEditObjpractsComponent } from './objpracts/add-edit-objpracts/add-edit-objpracts.component';
import { ShowObjpractsComponent } from './objpracts/show-objpracts/show-objpracts.component';
import { AddEditLibraresComponent } from './librares/add-edit-librares/add-edit-librares.component';
import { LibraresComponent } from './librares/librares.component';
import { ShowLibraresComponent } from './librares/show-librares/show-librares.component';
import { SportsComponent } from './sports/sports.component';
import { AddEditSportsComponent } from './sports/add-edit-sports/add-edit-sports.component';
import { ShowSportsComponent } from './sports/show-sports/show-sports.component';
import { MealsComponent } from './meals/meals.component';
import { AddEditMealsComponent } from './meals/add-edit-meals/add-edit-meals.component';
import { ShowMealsComponent } from './meals/show-meals/show-meals.component';
import { HealtComponent } from './healt/healt.component';
import { AddEditHealtComponent } from './healt/add-edit-healt/add-edit-healt.component';
import { ShowHealtComponent } from './healt/show-healt/show-healt.component';
import { OneComponent } from './one/one.component';
import { AddEditOneComponent } from './one/add-edit-one/add-edit-one.component';
import { ShowOneComponent } from './one/show-one/show-one.component';
import { TwoComponent } from './two/two.component';
import { AddEditTwoComponent } from './two/add-edit-two/add-edit-two.component';
import { ShowTwoComponent } from './two/show-two/show-two.component';
import { ThreeComponent } from './three/three.component';
import { AddEditThreeComponent } from './three/add-edit-three/add-edit-three.component';
import { ShowThreeComponent } from './three/show-three/show-three.component';
import { FourComponent } from './four/four.component';
import { AddEditFourComponent } from './four/add-edit-four/add-edit-four.component';
import { ShowFourComponent } from './four/show-four/show-four.component';
import { FiveComponent } from './five/five.component';
import { AddEditFiveComponent } from './five/add-edit-five/add-edit-five.component';
import { ShowFiveComponent } from './five/show-five/show-five.component';
import { SixComponent } from './six/six.component';
import { AddEditSixComponent } from './six/add-edit-six/add-edit-six.component';
import { ShowSixComponent } from './six/show-six/show-six.component';
import { AddEditSevenComponent } from './seven/add-edit-seven/add-edit-seven.component';
import { ShowSevenComponent } from './seven/show-seven/show-seven.component';
import { SevenComponent } from './seven/seven.component';
import { OsnovsvedenComponent } from './osnovsveden/osnovsveden.component';
import { StructandorganComponent } from './structandorgan/structandorgan.component';
import { DocumentsComponent } from './documents/documents.component';
import { ObrazovanieComponent } from './obrazovanie/obrazovanie.component';
import { ObrazstandartsComponent } from './obrazstandarts/obrazstandarts.component';
import { RucovodstvoComponent } from './rucovodstvo/rucovodstvo.component';
import { MtoComponent } from './mto/mto.component';
import { StipendiComponent } from './stipendi/stipendi.component';
import { PlatnobrazuslComponent } from './platnobrazusl/platnobrazusl.component';
import { FinecdeyatelnostComponent } from './finecdeyatelnost/finecdeyatelnost.component';
import { VacantmestComponent } from './vacantmest/vacantmest.component';
import { DostsredaComponent } from './dostsreda/dostsreda.component';
import { MegdunarodsotrComponent } from './megdunarodsotr/megdunarodsotr.component';
import { StandarttwoComponent } from './standarttwo/standarttwo.component';
import { AddEditStantwoComponent } from './standarttwo/add-edit-stantwo/add-edit-stantwo.component';
import { ShowStantwoComponent } from './standarttwo/show-stantwo/show-stantwo.component';
import { GrantinfotwoComponent } from './grantinfotwo/grantinfotwo.component';
import { AddEditGranttwoComponent } from './grantinfotwo/add-edit-granttwo/add-edit-granttwo.component';
import { ShowGranttwoComponent } from './grantinfotwo/show-granttwo/show-granttwo.component';
import { RashComponent } from './rash/rash.component';
import { AddEditRashComponent } from './rash/add-edit-rash/add-edit-rash.component';
import { ShowRashComponent } from './rash/show-rash/show-rash.component';
import { SvedenoneComponent } from './svedenone/svedenone.component';
import { AddEditSvedenoneComponent } from './svedenone/add-edit-svedenone/add-edit-svedenone.component';
import { ShowSvedenoneComponent } from './svedenone/show-svedenone/show-svedenone.component';
import { SvedentwoComponent } from './svedentwo/svedentwo.component';
import { AddEditSvedentwoComponent } from './svedentwo/add-edit-svedentwo/add-edit-svedentwo.component';
import { ShowSvedentwoComponent } from './svedentwo/show-svedentwo/show-svedentwo.component';
import { PlatComponent } from './plat/plat.component';
import { AddEditPlatComponent } from './plat/add-edit-plat/add-edit-plat.component';
import { ShowPlatComponent } from './plat/show-plat/show-plat.component';
import { DocaComponent } from './doca/doca.component';
import { AddEditDocaComponent } from './doca/add-edit-doca/add-edit-doca.component';
import { ShowDocaComponent } from './doca/show-doca/show-doca.component';
import { DocbComponent } from './docb/docb.component';
import { AddEditDocbComponent } from './docb/add-edit-docb/add-edit-docb.component';
import { ShowDocbComponent } from './docb/show-docb/show-docb.component';
import { DoccComponent } from './docc/docc.component';
import { AddEditDoccComponent } from './docc/add-edit-docc/add-edit-docc.component';
import { ShowDoccComponent } from './docc/show-docc/show-docc.component';
import { DocdComponent } from './docd/docd.component';
import { AddEditDocdComponent } from './docd/add-edit-docd/add-edit-docd.component';
import { ShowDocdComponent } from './docd/show-docd/show-docd.component';
import { DoceComponent } from './doce/doce.component';
import { AddEditDoceComponent } from './doce/add-edit-doce/add-edit-doce.component';
import { ShowDoceComponent } from './doce/show-doce/show-doce.component';
import { DocfComponent } from './docf/docf.component';
import { AddEditDocfComponent } from './docf/add-edit-docf/add-edit-docf.component';
import { ShowDocfComponent } from './docf/show-docf/show-docf.component';
import { DocgComponent } from './docg/docg.component';
import { AddEditDocgComponent } from './docg/add-edit-docg/add-edit-docg.component';
import { ShowDocgComponent } from './docg/show-docg/show-docg.component';
import { DochComponent } from './doch/doch.component';
import { AddEditDochComponent } from './doch/add-edit-doch/add-edit-doch.component';
import { ShowDochComponent } from './doch/show-doch/show-doch.component';
import { DociComponent } from './doci/doci.component';
import { AddEditDociComponent } from './doci/add-edit-doci/add-edit-doci.component';
import { ShowDociComponent } from './doci/show-doci/show-doci.component';
import { DocjComponent } from './docj/docj.component';
import { AddEditDocjComponent } from './docj/add-edit-docj/add-edit-docj.component';
import { ShowDocjComponent } from './docj/show-docj/show-docj.component';
import { DockComponent } from './dock/dock.component';
import { AddEditDockComponent } from './dock/add-edit-dock/add-edit-dock.component';
import { ShowDockComponent } from './dock/show-dock/show-dock.component';
import { DoclComponent } from './docl/docl.component';
import { AddEditDoclComponent } from './docl/add-edit-docl/add-edit-docl.component';
import { ShowDoclComponent } from './docl/show-docl/show-docl.component';
import { DocmComponent } from './docm/docm.component';
import { AddEditDocmComponent } from './docm/add-edit-docm/add-edit-docm.component';
import { ShowDocmComponent } from './docm/show-docm/show-docm.component';
import { DocnComponent } from './docn/docn.component';
import { AddEditDocnComponent } from './docn/add-edit-docn/add-edit-docn.component';
import { ShowDocnComponent } from './docn/show-docn/show-docn.component';
import { DocoComponent } from './doco/doco.component';
import { AddEditDocoComponent } from './doco/add-edit-doco/add-edit-doco.component';
import { ShowDocoComponent } from './doco/show-doco/show-doco.component';
import { DocpComponent } from './docp/docp.component';
import { AddEditDocpComponent } from './docp/add-edit-docp/add-edit-docp.component';
import { ShowDocpComponent } from './docp/show-docp/show-docp.component';
import { DocumentiComponent } from './documenti/documenti.component';
import { AllComponent } from './all/all.component';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    ShowProfComponent,
    AddEditInfComponent,
    ShowInfComponent,
    InfComponent,
    AdmisComponent,
    AddEditAdmisComponent,
    ShowAdmisComponent,
    PerevComponent,
    AddEditPerevComponent,
    ShowPerevComponent,
    ObrazComponent,
    AddEditObrazComponent,
    ShowObrazComponent,
    PracticesComponent,
    AddEditPracticesComponent,
    ShowPracticesComponent,
    SciencsComponent,
    AddEditSciencsComponent,
    ShowSciencsComponent,
    SvedorgComponent,
    AddEditSvedorgComponent,
    ShowSvedorgComponent,
    AddEditFacilitiesComponent,
    FacilitiesComponent,
    ShowFacilitiesComponent,
    ObjpractsComponent,
    AddEditObjpractsComponent,
    ShowObjpractsComponent,
    AddEditLibraresComponent,
    LibraresComponent,
    ShowLibraresComponent,
    SportsComponent,
    AddEditSportsComponent,
    ShowSportsComponent,
    MealsComponent,
    AddEditMealsComponent,
    ShowMealsComponent,
    HealtComponent,
    AddEditHealtComponent,
    ShowHealtComponent,
    OneComponent,
    AddEditOneComponent,
    ShowOneComponent,
    TwoComponent,
    AddEditTwoComponent,
    ShowTwoComponent,
    ThreeComponent,
    AddEditThreeComponent,
    ShowThreeComponent,
    FourComponent,
    AddEditFourComponent,
    ShowFourComponent,
    FiveComponent,
    AddEditFiveComponent,
    ShowFiveComponent,
    SixComponent,
    AddEditSixComponent,
    ShowSixComponent,
    AddEditSevenComponent,
    ShowSevenComponent,
    SevenComponent,
    OsnovsvedenComponent,
    StructandorganComponent,
    DocumentsComponent,
    ObrazovanieComponent,
    ObrazstandartsComponent,
    RucovodstvoComponent,
    MtoComponent,
    StipendiComponent,
    PlatnobrazuslComponent,
    FinecdeyatelnostComponent,
    VacantmestComponent,
    DostsredaComponent,
    MegdunarodsotrComponent,
    StandarttwoComponent,
    AddEditStantwoComponent,
    ShowStantwoComponent,
    GrantinfotwoComponent,
    AddEditGranttwoComponent,
    ShowGranttwoComponent,
    RashComponent,
    AddEditRashComponent,
    ShowRashComponent,
    SvedenoneComponent,
    AddEditSvedenoneComponent,
    ShowSvedenoneComponent,
    SvedentwoComponent,
    AddEditSvedentwoComponent,
    ShowSvedentwoComponent,
    PlatComponent,
    AddEditPlatComponent,
    ShowPlatComponent,
    DocaComponent,
    AddEditDocaComponent,
    ShowDocaComponent,
    DocbComponent,
    AddEditDocbComponent,
    ShowDocbComponent,
    DoccComponent,
    AddEditDoccComponent,
    ShowDoccComponent,
    DocdComponent,
    AddEditDocdComponent,
    ShowDocdComponent,
    DoceComponent,
    AddEditDoceComponent,
    ShowDoceComponent,
    DocfComponent,
    AddEditDocfComponent,
    ShowDocfComponent,
    DocgComponent,
    AddEditDocgComponent,
    ShowDocgComponent,
    DochComponent,
    AddEditDochComponent,
    ShowDochComponent,
    DociComponent,
    AddEditDociComponent,
    ShowDociComponent,
    DocjComponent,
    AddEditDocjComponent,
    ShowDocjComponent,
    DockComponent,
    AddEditDockComponent,
    ShowDockComponent,
    DoclComponent,
    AddEditDoclComponent,
    ShowDoclComponent,
    DocmComponent,
    AddEditDocmComponent,
    ShowDocmComponent,
    DocnComponent,
    AddEditDocnComponent,
    ShowDocnComponent,
    DocoComponent,
    AddEditDocoComponent,
    ShowDocoComponent,
    DocpComponent,
    AddEditDocpComponent,
    ShowDocpComponent,
    DocumentiComponent,
    AllComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:4200'],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      }
    })
  ],
  providers: [
    SharedService,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
