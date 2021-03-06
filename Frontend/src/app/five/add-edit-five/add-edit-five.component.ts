import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-five',
  templateUrl: './add-edit-five.component.html',
  styleUrls: ['./add-edit-five.component.scss']
})
export class AddEditFiveComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() five: any;
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
    this.Values = this.five;
  }

  addFives(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addFivesInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateFives(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateFivesInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getFivesInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }


}
