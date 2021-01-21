import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-sports',
  templateUrl: './add-edit-sports.component.html',
  styleUrls: ['./add-edit-sports.component.scss']
})
export class AddEditSportsComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() sports: any;
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
    this.Values = this.sports;
  }

  addSports(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addSportsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateSports(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateSportsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getSportsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
