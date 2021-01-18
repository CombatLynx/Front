import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-sciencs',
  templateUrl: './add-edit-sciencs.component.html',
  styleUrls: ['./add-edit-sciencs.component.scss']
})
export class AddEditSciencsComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() sciencs: any;
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
    this.Values = this.sciencs;
  }

  addSciencs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addSciencsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateSciencs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateSciencsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getSciencsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
