import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-paid',
  templateUrl: './add-edit-paid.component.html',
  styleUrls: ['./add-edit-paid.component.scss']
})
export class AddEditPaidComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() paid: any;
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
    this.Values = this.paid;
  }

  addPaid(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addPaidInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updatePaid(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updatePaidInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getPaidInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}