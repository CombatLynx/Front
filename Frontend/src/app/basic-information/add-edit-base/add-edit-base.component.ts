import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-base',
  templateUrl: './add-edit-base.component.html',
  styleUrls: ['./add-edit-base.component.scss']
})
export class AddEditBaseComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() base: any;
  BIid: string;
  BIregDate: string;
  BIaddress: string;
  BIworkTime: string;
  BItelephone: string;
  BIfaxes: string;
  BIemail: string;
  BIaddressPlace: string;
  PhotoFilePath: string;

  DepartmentsList: any = [];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data: any) => {
      this.DepartmentsList = data;

      this.BIid = this.base.BIid;
      this.BIregDate = this.base.BIregDate;
      this.BIaddress = this.base.BIaddress;
      this.BIworkTime = this.base.BIworkTime;
      this.BItelephone = this.base.BItelephone;
      this.BIfaxes = this.base.BIfaxes;
      this.BIemail = this.base.BIemail;
      this.PhotoFilePath = this.service.PhotoUrl + this.BIaddressPlace;
    });
  }

  addBasicInformation(){
    const val = {
      BIid: this.BIid,
      BIregDate: this.BIregDate,
      BIaddress: this.BIaddress,
      BIworkTime: this.BIworkTime,
      BItelephone: this.BItelephone,
      BIfaxes: this.BIfaxes,
      BIemail: this.BIemail,
      BIaddressPlace: this.BIaddressPlace
    };

    this.service.addBasicInformation(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateBasicInformation(){
    const val = {
      BIid: this.BIid,
      BIregDate: this.BIregDate,
      BIaddress: this.BIaddress,
      BIworkTime: this.BIworkTime,
      BItelephone: this.BItelephone,
      BIfaxes: this.BIfaxes,
      BIemail: this.BIemail,
      BIaddressPlace: this.BIaddressPlace
    };

    this.service.updateBasicInformation(val).subscribe(res => {
      alert(res.toString());
    });
  }


  uploadPhoto(event){
    const file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadPhoto(formData).subscribe((data: any) => {
      this.BIaddressPlace = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl + this.BIaddressPlace;
    });
  }

}
