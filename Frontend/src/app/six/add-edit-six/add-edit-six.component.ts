import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-six',
  templateUrl: './add-edit-six.component.html',
  styleUrls: ['./add-edit-six.component.scss']
})
export class AddEditSixComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() six: any;
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
    this.Values = this.six;
  }

  addSixs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addSixsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateSixs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateSixsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getSixsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
