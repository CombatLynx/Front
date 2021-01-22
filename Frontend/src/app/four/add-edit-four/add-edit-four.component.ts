import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-four',
  templateUrl: './add-edit-four.component.html',
  styleUrls: ['./add-edit-four.component.scss']
})
export class AddEditFourComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() four: any;
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
    this.Values = this.four;
  }

  addFours(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addFoursInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateFours(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateFoursInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getFoursInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
