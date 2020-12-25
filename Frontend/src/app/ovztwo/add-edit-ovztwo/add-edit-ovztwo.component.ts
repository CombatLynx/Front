import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-ovztwo',
  templateUrl: './add-edit-ovztwo.component.html',
  styleUrls: ['./add-edit-ovztwo.component.scss']
})
export class AddEditOvztwoComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() ovztwo: any;
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
    this.Values = this.ovztwo;
  }

  addOvzTwos(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addOvzTwosInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateOvzTwos(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateOvzTwosInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getOvzTwosInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
