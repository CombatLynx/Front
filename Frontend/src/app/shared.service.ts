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

  // ОСНОВНЫЕ СВЕДЕНИЯ

  getDepartmentInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/departmentTable/');
  }

  addDepartmentInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/departmentTable/' + id, val);
  }

  updateDepartmentInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/departmentTable/' + id, val);
  }

  deleteDepartmentInfo(val: any){
    return this.http.delete(this.APIUrl + '/departmentTable/' + val);
  }

  getDepartmentInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/departmentTable/format');
  }

  publishDepartmentInfo() {
    return this.http.get(this.APIUrl + '/departmentTable/publish/');
  }

  // УЧРЕДИТЕЛИ ОБРАЗОВАТЕЛЬНОЙ ОРГАНИЗАЦИИ

  getUchredInfoList(): Observable<any> {
    return this.http.get<any>(this.APIUrl + '/uchredTable/');
  }

  addUchredInfoList(id: number, val: any){
    return this.http.post(this.APIUrl + '/uchredTable/' + id, val);
  }

  updateUchredInfo(id: number, val: any){
    return this.http.put(this.APIUrl + '/uchredTable/' + id, val);
  }

  deleteUchredInfo(val: any){
    return this.http.delete(this.APIUrl + '/uchredTable/' + val);
  }

  getUchredInfoFormat(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/uchredTable/format');
  }

  publishUchredInfo() {
    return this.http.get(this.APIUrl + '/uchredTable/publish/');
  }
}
