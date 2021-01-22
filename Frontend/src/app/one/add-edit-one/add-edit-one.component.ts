import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-one',
  templateUrl: './add-edit-one.component.html',
  styleUrls: ['./add-edit-one.component.scss']
})
export class AddEditOneComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() one: any;
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
    this.Values = this.one;
  }

  addOnes(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addOnesInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateOnes(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateOnesInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getOnesInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
