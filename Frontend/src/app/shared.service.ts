import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000';
  readonly PhotoUrl = 'http://127.0.0.1:8000/media/';

  constructor(private http: HttpClient) { }

  getDepList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }

  addDepartment(val: any){
    return this.http.post(this.APIUrl + '/department/', val);
  }

  updateDepartment(val: any){
    return this.http.put(this.APIUrl + '/department/', val);
  }

  deleteDepartment(val: any){
    return this.http.delete(this.APIUrl + '/department/' + val);
  }


  getEmpList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/employee/');
  }

  addEmployee(val: any){
    return this.http.post(this.APIUrl + '/employee/', val);
  }

  updateEmployee(val: any){
    return this.http.put(this.APIUrl + '/employee/', val);
  }

  deleteEmployee(val: any){
    return this.http.delete(this.APIUrl + '/employee/' + val);
  }

  UploadPhoto(val: any){
    return this.http.post(this.APIUrl + '/SaveFile', val);
  }

  getAllDepartmentNames(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }


  getBaseList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/basicInformations/');
  }

  addBasicInformation(val: any){
    return this.http.post(this.APIUrl + '/basicInformations/', val);
  }

  updateBasicInformation(val: any){
    return this.http.put(this.APIUrl + '/basicInformations/', val);
  }

  deleteBasicInformation(val: any){
    return this.http.delete(this.APIUrl + '/basicInformations/' + val);
  }

  publishData(val: any) {
    return this.http.post(this.APIUrl + '/basicInformations/publish/', {id : val});
  }

// ----------------------- СТРУКТУРНЫЕ ПОДРАЗДЕЛЕНИЯ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ -----------------------------------

  getDepartmentInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/subdivisions/');
  }

  addDepartmentInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/subdivisions/' + id, val);
  }

  updateDepartmentInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/subdivisions/' + id, val);
  }

  deleteDepartmentInfo(val: any){
    return this.http.delete(this.APIUrl + '/subdivisions/' + val);
  }

  getDepartmentInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/subdivisions/format');
  }

  publishDepartmentInfo() {
    return this.http.get(this.APIUrl + '/subdivisions/publish/');
  }

// ------------------------- ОСНОВНЫЕ СВЕДЕНИЯ -----------------------------------------

  getEmployeeInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/basic_informations/');
  }

  addEmployeeInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/basic_informations/' + id, val);
  }

  updateEmployeeInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/basic_informations/' + id, val);
  }

  deleteEmployeeInfo(val: any){
    return this.http.delete(this.APIUrl + '/basic_informations/' + val);
  }

  getEmployeeInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/basic_informations/format');
  }

  publishEmployeeInfo() {
    return this.http.get(this.APIUrl + '/basic_informations/publish/');
  }

//  --------------------------- УЧРЕДИТЕЛИ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ ----------------------------------

  getUchredInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/founders/');
  }

  addUchredInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/founders/' + id, val);
  }

  updateUchredInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/founders/' + id, val);
  }

  deleteUchredInfo(val: any){
    return this.http.delete(this.APIUrl + '/founders/' + val);
  }

  getUchredInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/founders/format');
  }

  publishUchredInfo() {
    return this.http.get(this.APIUrl + '/founders/publish/');
  }

//  --------------------------- ФИЛИАЛЫ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ ----------------------------------

  getFiliationInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/filiations/');
  }

  addFiliationInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/filiations/' + id, val);
  }

  updateFiliationInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/filiations/' + id, val);
  }

  deleteFiliationInfo(val: any){
    return this.http.delete(this.APIUrl + '/filiations/' + val);
  }

  getFiliationInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/filiations/format');
  }

  publishFiliationInfo() {
    return this.http.get(this.APIUrl + '/filiations/publish/');
  }

//  --------------------------- ПРЕДСТАВИТЕЛЬСТВО ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ ----------------------------------

  getRepresentationInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/representations/');
  }

  addRepresentationInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/representations/' + id, val);
  }

  updateRepresentationInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/representations/' + id, val);
  }

  deleteRepresentationInfo(val: any){
    return this.http.delete(this.APIUrl + '/representations/' + val);
  }

  getRepresentationInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/representations/format');
  }

  publishRepresentationInfo() {
    return this.http.get(this.APIUrl + '/representations/publish/');
  }

//  --------------------------- ОРГАНЫ УПРАВЛЕНИЯ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ ----------------------------------

  getManagementInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/managements/');
  }

  addManagementInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/managements/' + id, val);
  }

  updateManagementInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/managements/' + id, val);
  }

  deleteManagementInfo(val: any){
    return this.http.delete(this.APIUrl + '/managements/' + val);
  }

  getManagementInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/managements/format');
  }

  publishManagementInfo() {
    return this.http.get(this.APIUrl + '/managements/publish/');
  }

  //  --------------------------- ФИНАНСОВО-ЭКОНОМИЧЕСКАЯ ДЕЯТЕЛЬНОСТЬ ----------------------------------

  getVolumeInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/volumes/');
  }

  addVolumeInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/volumes/' + id, val);
  }

  updateVolumeInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/volumes/' + id, val);
  }

  deleteVolumeInfo(val: any){
    return this.http.delete(this.APIUrl + '/volumes/' + val);
  }

  getVolumeInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/volumes/format');
  }

  publishVolumeInfo() {
    return this.http.get(this.APIUrl + '/volumes/publish/');
  }

  //  --------------------------- ВАКАНТНЫЕ МЕСТА ДЛЯ ПРИЁМА (ПЕРЕВОДА) ----------------------------------

  getVacInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/vacs/');
  }

  addVacInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/vacs/' + id, val);
  }

  updateVacInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/vacs/' + id, val);
  }

  deleteVacInfo(val: any){
    return this.http.delete(this.APIUrl + '/vacs/' + val);
  }

  getVacInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/vacs/format');
  }

  publishVacInfo() {
    return this.http.get(this.APIUrl + '/vacs/publish/');
  }


// ------------------------ РУКОВОДСТВО. ПЕДАГОГИЧЕСКИЙ (НАУЧНО-ПЕДАГОГИЧЕСКИЙ) СОСТАВ -------------------------------
// ---------------------------ИНФОРМАЦИЯ ОБ АДМИНИСТРАЦИИ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ(РЕКТОР)-----------------

  getLeaderInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/leaders/');
  }

  addLeaderInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/leaders/' + id, val);
  }

  updateLeaderInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/leaders/' + id, val);
  }

  deleteLeaderInfo(val: any){
    return this.http.delete(this.APIUrl + '/leaders/' + val);
  }

  getLeaderInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/leaders/format');
  }

  publishLeaderInfo() {
    return this.http.get(this.APIUrl + '/leaders/publish/');
  }

// ------------------------ РУКОВОДСТВО. ПЕДАГОГИЧЕСКИЙ (НАУЧНО-ПЕДАГОГИЧЕСКИЙ) СОСТАВ -------------------------------
// ---------------------------ИНФОРМАЦИЯ ОБ АДМИНИСТРАЦИИ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ(ЗАМИСТИТЕЛИ)-----------------

  getLeaderTwoInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/leadersTwo/');
  }

  addLeaderTwoInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/leadersTwo/' + id, val);
  }

  updateLeaderTwoInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/leadersTwo/' + id, val);
  }

  deleteLeaderTwoInfo(val: any){
    return this.http.delete(this.APIUrl + '/leadersTwo/' + val);
  }

  getLeaderTwoInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/leadersTwo/format');
  }

  publishLeaderTwoInfo() {
    return this.http.get(this.APIUrl + '/leadersTwo/publish/');
  }

// ------------------------ РУКОВОДСТВО. ПЕДАГОГИЧЕСКИЙ (НАУЧНО-ПЕДАГОГИЧЕСКИЙ) СОСТАВ -------------------------------
// ----------ИНФОРМАЦИЯ О РУКОВОДИТЕЛЯХ ФИЛИАЛОВ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ-----------------

  getFilialLeaderInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/filialLeaders/');
  }

  addFilialLeaderInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/filialLeaders/' + id, val);
  }

  updateFilialLeaderInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/filialLeaders/' + id, val);
  }

  deleteFilialLeaderInfo(val: any){
    return this.http.delete(this.APIUrl + '/filialLeaders/' + val);
  }

  getFilialLeaderInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/filialLeaders/format');
  }

  publishFilialLeaderInfo() {
    return this.http.get(this.APIUrl + '/filialLeaders/publish/');
  }

// ------------------------ РУКОВОДСТВО. ПЕДАГОГИЧЕСКИЙ (НАУЧНО-ПЕДАГОГИЧЕСКИЙ) СОСТАВ -------------------------------
// ----------ИНФОРМАЦИЯ О ПЕРСОНАЛЬНОМ СОСТАВЕ ПЕДАГОГИЧЕСКИХ РАБОТНИКОВ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ-----------------

  getTeacherInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/teachers/');
  }

  addTeacherInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/teachers/' + id, val);
  }

  updateTeacherInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/teachers/' + id, val);
  }

  deleteTeacherInfo(val: any){
    return this.http.delete(this.APIUrl + '/teachers/' + val);
  }

  getTeacherInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/teachers/format');
  }

  publishTeacherInfo() {
    return this.http.get(this.APIUrl + '/teachers/publish/');
  }

// -------------------------------- ОБРАЗОВАТЕЛЬНЫЕ СТАНДАРТЫ -------------------------------------------------

  getStandartInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/standartCopies/');
  }

  addStandartInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/standartCopies/' + id, val);
  }

  updateStandartInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/standartCopies/' + id, val);
  }

  deleteStandartInfo(val: any){
    return this.http.delete(this.APIUrl + '/standartCopies/' + val);
  }

  getStandartInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/standartCopies/format');
  }

  publishStandartInfo() {
    return this.http.get(this.APIUrl + '/standartCopies/publish/');
  }

// -------------------------------- ПЛАТНЫЕ ОБРАЗОВАТЕЛЬНЫЕ УСЛУГИ -------------------------------------------------

  getPaidInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/paidServices/');
  }

  addPaidInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/paidServices/' + id, val);
  }

  updatePaidInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/paidServices/' + id, val);
  }

  deletePaidInfo(val: any){
    return this.http.delete(this.APIUrl + '/paidServices/' + val);
  }

  getPaidInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/paidServices/format');
  }

  publishPaidInfo() {
    return this.http.get(this.APIUrl + '/paidServices/publish/');
  }

// -------------------------------- МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО -------------------------------------------------
// ----- ИНФОРМАЦИЯ О ЗАКЛЮЧЕННЫХ И ПЛАНИРУЕМЫХ К ЗАКЛЮЧЕНИЮ ДОГОВОРАХ С ИНОСТРАННЫМИ И (ИЛИ) МЕЖДУНАРОДНЫМИ -----
// -------------------------- ОРГАНИЗАЦИЯМИ ПО ВОПРОСАМ ОБРАЗОВАНИЯ И НАУКИ --------------------------------------

  getInternationalDogsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/internationalDogs/');
  }

  addInternationalDogsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/internationalDogs/' + id, val);
  }

  updateInternationalDogsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/internationalDogs/' + id, val);
  }

  deleteInternationalDogsInfo(val: any){
    return this.http.delete(this.APIUrl + '/internationalDogs/' + val);
  }

  getInternationalDogsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/internationalDogs/format');
  }

  publishInternationalDogsInfo() {
    return this.http.get(this.APIUrl + '/internationalDogs/publish/');
  }

// -------------------------------- МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО -------------------------------------------------
// --------------------------- ИНФОРМАЦИЯ О МЕЖДУНАРОДНОЙ АККРЕДИТАЦИИ -------------------------------------------

  getInternationalAccrsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/internationalAccrs/');
  }

  addInternationalAccrsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/internationalAccrs/' + id, val);
  }

  updateInternationalAccrsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/internationalAccrs/' + id, val);
  }

  deleteInternationalAccrsInfo(val: any){
    return this.http.delete(this.APIUrl + '/internationalAccrs/' + val);
  }

  getInternationalAccrsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/internationalAccrs/format');
  }

  publishInternationalAccrsInfo() {
    return this.http.get(this.APIUrl + '/internationalAccrs/publish/');
  }

// -------------------------------- Доступная среда -------------------------------------------------
// -------------- Сведения о специально оборудованных учебных кабинетах -------------------------------------------

  getSpecCabsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/specCabs/');
  }

  addSpecCabsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/specCabs/' + id, val);
  }

  updateSpecCabsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/specCabs/' + id, val);
  }

  deleteSpecCabsInfo(val: any){
    return this.http.delete(this.APIUrl + '/specCabs/' + val);
  }

  getSpecCabsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/specCabs/format');
  }

  publishSpecCabsInfo() {
    return this.http.get(this.APIUrl + '/specCabs/publish/');
  }

// -------------------------------- Доступная среда -------------------------------------------------
// ----------- Сведения о приспособленных объектах для проведения практических занятий --------------

  getSpecPracsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/specPracs/');
  }

  addSpecPracsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/specPracs/' + id, val);
  }

  updateSpecPracsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/specPracs/' + id, val);
  }

  deleteSpecPracsInfo(val: any){
    return this.http.delete(this.APIUrl + '/specPracs/' + val);
  }

  getSpecPracsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/specPracs/format');
  }

  publishSpecPracsInfo() {
    return this.http.get(this.APIUrl + '/specPracs/publish/');
  }

// -------------------------------- Доступная среда -------------------------------------------------
// ---------------------------- Сведения о библиотеке(ах) -------------------------------------------

  getSpecLibsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/specLibs/');
  }

  addSpecLibsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/specLibs/' + id, val);
  }

  updateSpecLibsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/specLibs/' + id, val);
  }

  deleteSpecLibsInfo(val: any){
    return this.http.delete(this.APIUrl + '/specLibs/' + val);
  }

  getSpecLibsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/specLibs/format');
  }

  publishSpecLibsInfo() {
    return this.http.get(this.APIUrl + '/specLibs/publish/');
  }

// -------------------------------- Доступная среда -------------------------------------------------
// ---------------------------- Сведения об объектах спорта -----------------------------------------

  getSpecSportsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/specSports/');
  }

  addSpecSportsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/specSports/' + id, val);
  }

  updateSpecSportsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/specSports/' + id, val);
  }

  deleteSpecSportsInfo(val: any){
    return this.http.delete(this.APIUrl + '/specSports/' + val);
  }

  getSpecSportsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/specSports/format');
  }

  publishSpecSportsInfo() {
    return this.http.get(this.APIUrl + '/specSports/publish/');
  }

// -------------------------------- Доступная среда -------------------------------------------------
// ---------------------- Сведения об условиях питания обучающихся ----------------------------------

  getSpecMealsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/specMeals/');
  }

  addSpecMealsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/specMeals/' + id, val);
  }

  updateSpecMealsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/specMeals/' + id, val);
  }

  deleteSpecMealsInfo(val: any){
    return this.http.delete(this.APIUrl + '/specMeals/' + val);
  }

  getSpecMealsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/specMeals/format');
  }

  publishSpecMealsInfo() {
    return this.http.get(this.APIUrl + '/specMeals/publish/');
  }

// -------------------------------- Доступная среда -------------------------------------------------
// -------------- Сведения об условиях охраны здоровья обучающихся ----------------------------------

  getSpecHealthsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/specHealths/');
  }

  addSpecHealthsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/specHealths/' + id, val);
  }

  updateSpecHealthsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/specHealths/' + id, val);
  }

  deleteSpecHealthsInfo(val: any){
    return this.http.delete(this.APIUrl + '/specHealths/' + val);
  }

  getSpecHealthsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/specHealths/format');
  }

  publishSpecHealthsInfo() {
    return this.http.get(this.APIUrl + '/specHealths/publish/');
  }

// -------------------------------- Доступная среда -------------------------------------------------
// ----------------------------------- Сведения ----------------------------------

  getOvzsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/ovzs/');
  }

  addOvzsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/ovzs/' + id, val);
  }

  updateOvzsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/ovzs/' + id, val);
  }

  deleteOvzsInfo(val: any){
    return this.http.delete(this.APIUrl + '/ovzs/' + val);
  }

  getOvzsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/ovzs/format');
  }

  publishOvzsInfo() {
    return this.http.get(this.APIUrl + '/ovzs/publish/');
  }

// -------------------------------- Доступная среда -------------------------------------------------
// -------------- Ссылки на перечень электронных образовательных ресурсов ---------------------------

  getLinkOvzsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/linkOvzs/');
  }

  addLinkOvzsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/linkOvzs/' + id, val);
  }

  updateLinkOvzsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/linkOvzs/' + id, val);
  }

  deleteLinkOvzsInfo(val: any){
    return this.http.delete(this.APIUrl + '/linkOvzs/' + val);
  }

  getLinkOvzsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/linkOvzs/format');
  }

  publishLinkOvzsInfo() {
    return this.http.get(this.APIUrl + '/linkOvzs/publish/');
  }


// -------------------------------- Доступная среда -------------------------------------------------
// ---------------------------------- Сведения 2 ----------------------------------------------------

  getOvzTwosInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/ovzTwos/');
  }

  addOvzTwosInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/ovzTwos/' + id, val);
  }

  updateOvzTwosInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/ovzTwos/' + id, val);
  }

  deleteOvzTwosInfo(val: any){
    return this.http.delete(this.APIUrl + '/ovzTwos/' + val);
  }

  getOvzTwosInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/ovzTwos/format');
  }

  publishOvzTwosInfo() {
    return this.http.get(this.APIUrl + '/ovzTwos/publish/');
  }


// -------------------------- СТИПЕНДИИ И ИНЫЕ ВИДЫ МАТЕРИАЛЬНОЙ ПОДДЕРЖКИ -----------------------------------
// -- ЛОКАЛЬНЫЕ НОРМАТИВНЫЕ АКТЫ, КОТОРЫМИ РЕГЛАМЕНТИРУЮТСЯ НАЛИЧИЕ И УСЛОВИЯ ПРЕДОСТАВЛЕНИЯ СТИПЕНДИЙ -------

  getGrantsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/grants/');
  }

  addGrantsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/grants/' + id, val);
  }

  updateGrantsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/grants/' + id, val);
  }

  deleteGrantsInfo(val: any){
    return this.http.delete(this.APIUrl + '/grants/' + val);
  }

  getGrantsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/grants/format');
  }

  publishGrantsInfo() {
    return this.http.get(this.APIUrl + '/grants/publish/');
  }


// -------------------------- СТИПЕНДИИ И ИНЫЕ ВИДЫ МАТЕРИАЛЬНОЙ ПОДДЕРЖКИ -----------------------------------
// ---------------------------------------- Информация -------------------------------------------------------

  getGrantInfosInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/grantInfos/');
  }

  addGrantInfosInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/grantInfos/' + id, val);
  }

  updateGrantInfosInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/grantInfos/' + id, val);
  }

  deleteGrantInfosInfo(val: any){
    return this.http.delete(this.APIUrl + '/grantInfos/' + val);
  }

  getGrantInfosInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/grantInfos/format');
  }

  publishGrantInfosInfo() {
    return this.http.get(this.APIUrl + '/grantInfos/publish/');
  }


// -------------------------- СТИПЕНДИИ И ИНЫЕ ВИДЫ МАТЕРИАЛЬНОЙ ПОДДЕРЖКИ -----------------------------------
// Копия локального нормативного акта, регламентирующего размер платы за пользование жилым помещением и коммунальные услуги в общежитии

  getActsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/acts/');
  }

  addActsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/acts/' + id, val);
  }

  updateActsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/acts/' + id, val);
  }

  deleteActsInfo(val: any){
    return this.http.delete(this.APIUrl + '/acts/' + val);
  }

  getActsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/acts/format');
  }

  publishActsInfo() {
    return this.http.get(this.APIUrl + '/acts/publish/');
  }


// -------------------------- СТИПЕНДИИ И ИНЫЕ ВИДЫ МАТЕРИАЛЬНОЙ ПОДДЕРЖКИ -----------------------------------
// Информация о трудоустройстве выпускников

  getJobsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/jobs/');
  }

  addJobsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/jobs/' + id, val);
  }

  updateJobsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/jobs/' + id, val);
  }

  deleteJobsInfo(val: any){
    return this.http.delete(this.APIUrl + '/jobs/' + val);
  }

  getJobsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/jobs/format');
  }

  publishJobsInfo() {
    return this.http.get(this.APIUrl + '/jobs/publish/');
  }


// -------------------------- Образование -----------------------------------
// Информация о реализуемых уровнях образования, о формах обучения, нормативных сроках обучения, сроке действия

  getGossInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/gosAccreditations/');
  }

  addGossInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/gosAccreditations/' + id, val);
  }

  updateGossInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/gosAccreditations/' + id, val);
  }

  deleteGossInfo(val: any){
    return this.http.delete(this.APIUrl + '/gosAccreditations/' + val);
  }

  getGossInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/gosAccreditations/format');
  }

  publishGossInfo() {
    return this.http.get(this.APIUrl + '/gosAccreditations/publish/');
  }


// -------------------------- Образование -----------------------------------
// Сведения о профессионально-общественной аккредитации образовательной программы (при наличии)

  getProfsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/profs/');
  }

  addProfsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/profs/' + id, val);
  }

  updateProfsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/profs/' + id, val);
  }

  deleteProfsInfo(val: any){
    return this.http.delete(this.APIUrl + '/profs/' + val);
  }

  getProfsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/profs/format');
  }

  publishProfsInfo() {
    return this.http.get(this.APIUrl + '/profs/publish/');
  }


// -------------------------- Образование -----------------------------------
// Информация о численности обучающихся по реализуемым образовательным программам по источникам финансирования

  getInfsInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/infs/');
  }

  addInfsInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/infs/' + id, val);
  }

  updateInfsInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/infs/' + id, val);
  }

  deleteInfsInfo(val: any){
    return this.http.delete(this.APIUrl + '/infs/' + val);
  }

  getInfsInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/infs/format');
  }

  publishInfsInfo() {
    return this.http.get(this.APIUrl + '/infs/publish/');
  }
}
