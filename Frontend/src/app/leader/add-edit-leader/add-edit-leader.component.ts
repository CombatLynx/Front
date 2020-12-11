import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-leader',
  templateUrl: './add-edit-leader.component.html',
  styleUrls: ['./add-edit-leader.component.scss']
})
export class AddEditLeaderComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() leader: any;
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
    this.Values = this.leader;
  }

  addLeader(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addLeaderInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateLeader(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateLeaderInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getLeaderInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
