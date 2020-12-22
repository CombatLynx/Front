import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-health',
  templateUrl: './add-edit-health.component.html',
  styleUrls: ['./add-edit-health.component.scss']
})
export class AddEditHealthComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() health: any;
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
    this.Values = this.health;
  }

  addSpecHealths(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addSpecHealthsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateSpecHealths(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateSpecHealthsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getSpecHealthsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
