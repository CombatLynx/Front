import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-rash',
  templateUrl: './add-edit-rash.component.html',
  styleUrls: ['./add-edit-rash.component.scss']
})
export class AddEditRashComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() rash: any;
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
    this.Values = this.rash;
  }

  addRush(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addRushInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateRush(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateRushInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getRushInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
