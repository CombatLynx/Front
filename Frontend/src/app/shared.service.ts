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

// ------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------

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

}
