import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-grant',
  templateUrl: './add-edit-grant.component.html',
  styleUrls: ['./add-edit-grant.component.scss']
})
export class AddEditGrantComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() grant: any;
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
    this.Values = this.grant;
  }

  addGrants(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addGrantsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateGrants(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateGrantsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getGrantsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
