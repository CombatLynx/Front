import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-lib',
  templateUrl: './add-edit-lib.component.html',
  styleUrls: ['./add-edit-lib.component.scss']
})
export class AddEditLibComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() lib: any;
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
    this.Values = this.lib;
  }

  addSpecLibs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addSpecLibsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateSpecLibs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateSpecLibsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getSpecLibsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
