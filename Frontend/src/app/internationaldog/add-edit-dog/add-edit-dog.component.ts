import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-dog',
  templateUrl: './add-edit-dog.component.html',
  styleUrls: ['./add-edit-dog.component.scss']
})
export class AddEditDogComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() dog: any;
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
    this.Values = this.dog;
  }

  addInternationalDogs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addInternationalDogsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateInternationalDogs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateInternationalDogsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getInternationalDogsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}

