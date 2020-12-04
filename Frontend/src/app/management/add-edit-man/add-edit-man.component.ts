import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-man',
  templateUrl: './add-edit-man.component.html',
  styleUrls: ['./add-edit-man.component.scss']
})
export class AddEditManComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() man: any;
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
    this.Values = this.man;
  }

  addManagment(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addManagementInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateManagement(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateManagementInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getManagementInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
