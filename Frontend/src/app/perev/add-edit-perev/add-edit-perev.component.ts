import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-perev',
  templateUrl: './add-edit-perev.component.html',
  styleUrls: ['./add-edit-perev.component.scss']
})
export class AddEditPerevComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() perev: any;
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
    this.Values = this.perev;
  }

  addPerev(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addPerevInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updatePerev(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updatePerevInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getPerevInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
