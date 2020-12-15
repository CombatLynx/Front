import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-stan',
  templateUrl: './add-edit-stan.component.html',
  styleUrls: ['./add-edit-stan.component.scss']
})
export class AddEditStanComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() stan: any;
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
    this.Values = this.stan;
  }

  addStandart(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addStandartInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateStandart(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateStandartInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getStandartInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
