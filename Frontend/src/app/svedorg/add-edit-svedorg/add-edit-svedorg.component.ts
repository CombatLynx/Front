import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-svedorg',
  templateUrl: './add-edit-svedorg.component.html',
  styleUrls: ['./add-edit-svedorg.component.scss']
})
export class AddEditSvedorgComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() svedorg: any;
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
    this.Values = this.svedorg;
  }

  addSvedOrg(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addSvedOrgInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateSvedOrg(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateSvedOrgInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getSvedOrgInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
