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

}
