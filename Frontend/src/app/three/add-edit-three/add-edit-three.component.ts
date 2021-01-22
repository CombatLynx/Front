import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-three',
  templateUrl: './add-edit-three.component.html',
  styleUrls: ['./add-edit-three.component.scss']
})
export class AddEditThreeComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() three: any;
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
    this.Values = this.three;
  }

  addThrees(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addThreesInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateThrees(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateThreesInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getThreesInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
