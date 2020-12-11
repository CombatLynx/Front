import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-filial',
  templateUrl: './add-edit-filial.component.html',
  styleUrls: ['./add-edit-filial.component.scss']
})
export class AddEditFilialComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() filial: any;
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
    this.Values = this.filial;
  }

  addFilialLeader(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addFilialLeaderInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateFilialLeader(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateFilialLeaderInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getFilialLeaderInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
