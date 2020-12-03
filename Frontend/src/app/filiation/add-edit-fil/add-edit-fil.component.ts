import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-fil',
  templateUrl: './add-edit-fil.component.html',
  styleUrls: ['./add-edit-fil.component.scss']
})
export class AddEditFilComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() fil: any;
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
    this.Values = this.fil;
  }

  addFiliation(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addFiliationInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateFiliation(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateFiliationInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getFiliationInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
