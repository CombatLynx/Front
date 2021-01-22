import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-two',
  templateUrl: './add-edit-two.component.html',
  styleUrls: ['./add-edit-two.component.scss']
})
export class AddEditTwoComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() two: any;
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
    this.Values = this.two;
  }

  addTwos(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addTwosInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateTwos(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateTwosInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getTwosInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
