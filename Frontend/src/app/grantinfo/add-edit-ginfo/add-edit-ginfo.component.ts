import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-ginfo',
  templateUrl: './add-edit-ginfo.component.html',
  styleUrls: ['./add-edit-ginfo.component.scss']
})
export class AddEditGinfoComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() ginfo: any;
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
    this.Values = this.ginfo;
  }

  addGrantInfos(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addGrantInfosInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateGrantInfos(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateGrantInfosInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getGrantInfosInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
