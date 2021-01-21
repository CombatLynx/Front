import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-meals',
  templateUrl: './add-edit-meals.component.html',
  styleUrls: ['./add-edit-meals.component.scss']
})
export class AddEditMealsComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() meals: any;
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
    this.Values = this.meals;
  }

  addMeals(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addMealsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateMeals(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateMealsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getMealsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
