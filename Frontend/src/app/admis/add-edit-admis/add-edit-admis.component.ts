import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-admis',
  templateUrl: './add-edit-admis.component.html',
  styleUrls: ['./add-edit-admis.component.scss']
})
export class AddEditAdmisComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() admis: any;
  Keys: any[] = [];
  Values: any[] = [];

  ngOnInit(): void {
    this.refreshBaseList();
    if (this.Values.length === 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.Values.length; i++) {
        this.Values.push('');
      }
    }
    this.Values = this.admis;
  }

  addAdmis(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addAdmisInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateAdmis(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateAdmisInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getAdmisInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
