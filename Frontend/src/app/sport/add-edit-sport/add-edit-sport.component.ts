import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-sport',
  templateUrl: './add-edit-sport.component.html',
  styleUrls: ['./add-edit-sport.component.scss']
})
export class AddEditSportComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() sport: any;
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
    this.Values = this.sport;
  }

  addSpecSports(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addSpecSportsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateSpecSports(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateSpecSportsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getSpecSportsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
