import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-act',
  templateUrl: './add-edit-act.component.html',
  styleUrls: ['./add-edit-act.component.scss']
})
export class AddEditActComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() act: any;
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
    this.Values = this.act;
  }

  addActsInfo(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addActsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateActsInfo(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateActsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getActsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
