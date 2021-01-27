import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-granttwo',
  templateUrl: './add-edit-granttwo.component.html',
  styleUrls: ['./add-edit-granttwo.component.scss']
})
export class AddEditGranttwoComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() granttwo: any;
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
    this.Values = this.granttwo;
  }

  addGrantInfoTwos(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addGrantInfoTwosInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateGrantInfoTwos(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateGrantInfoTwosInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getGrantInfoTwosInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
