import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-leadertwo',
  templateUrl: './add-edit-leadertwo.component.html',
  styleUrls: ['./add-edit-leadertwo.component.scss']
})
export class AddEditLeadertwoComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() leaderTwo: any;
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
    this.Values = this.leaderTwo;
  }

  addLeaderTwo(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addLeaderTwoInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateLeaderTwo(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateLeaderTwoInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getLeaderTwoInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
