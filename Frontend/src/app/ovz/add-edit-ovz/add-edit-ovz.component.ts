import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-ovz',
  templateUrl: './add-edit-ovz.component.html',
  styleUrls: ['./add-edit-ovz.component.scss']
})
export class AddEditOvzComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() ovz: any;
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
    this.Values = this.ovz;
  }

  addOvzs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addOvzsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateOvzs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateOvzsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getOvzsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
