import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-meal',
  templateUrl: './add-edit-meal.component.html',
  styleUrls: ['./add-edit-meal.component.scss']
})
export class AddEditMealComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() meal: any;
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
    this.Values = this.meal;
  }

  addSpecMeals(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addSpecMealsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateSpecMeals(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateSpecMealsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getSpecMealsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
