import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-link',
  templateUrl: './add-edit-link.component.html',
  styleUrls: ['./add-edit-link.component.scss']
})
export class AddEditLinkComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() link: any;
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
    this.Values = this.link;
  }

  addLinkOvzs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addLinkOvzsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateLinkOvzs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateLinkOvzsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getLinkOvzsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}

