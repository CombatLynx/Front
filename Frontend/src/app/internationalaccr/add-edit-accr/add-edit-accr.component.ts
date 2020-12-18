import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-accr',
  templateUrl: './add-edit-accr.component.html',
  styleUrls: ['./add-edit-accr.component.scss']
})
export class AddEditAccrComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() accr: any;
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
    this.Values = this.accr;
  }

  addInternationalAccrs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addInternationalAccrsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateInternationalAccrs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateInternationalAccrsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getInternationalAccrsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
