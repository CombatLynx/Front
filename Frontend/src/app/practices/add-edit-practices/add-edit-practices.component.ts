import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-practices',
  templateUrl: './add-edit-practices.component.html',
  styleUrls: ['./add-edit-practices.component.scss']
})
export class AddEditPracticesComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() practices: any;
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
    this.Values = this.practices;
  }

  addPractices(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addPracticesInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updatePractices(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updatePracticesInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getPracticesInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
