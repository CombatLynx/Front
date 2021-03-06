import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-inf',
  templateUrl: './add-edit-inf.component.html',
  styleUrls: ['./add-edit-inf.component.scss']
})
export class AddEditInfComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() inf: any;
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
    this.Values = this.inf;
  }

  addInfs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addInfsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateInfs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateInfsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getInfsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
