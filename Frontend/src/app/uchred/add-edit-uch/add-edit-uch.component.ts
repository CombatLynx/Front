import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-uch',
  templateUrl: './add-edit-uch.component.html',
  styleUrls: ['./add-edit-uch.component.scss']
})
export class AddEditUchComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() uch: any;
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
    this.Values = this.uch;
  }

  addUchred(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addUchredInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateUchred(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateUchredInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getUchredInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}