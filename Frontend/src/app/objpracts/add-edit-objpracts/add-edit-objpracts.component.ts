import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-objpracts',
  templateUrl: './add-edit-objpracts.component.html',
  styleUrls: ['./add-edit-objpracts.component.scss']
})
export class AddEditObjpractsComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() objpracts: any;
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
    this.Values = this.objpracts;
  }

  addObjPracts(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addObjPractsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateObjPracts(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateObjPractsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getObjPractsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
