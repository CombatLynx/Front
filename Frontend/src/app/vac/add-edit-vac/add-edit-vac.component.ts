import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-vac',
  templateUrl: './add-edit-vac.component.html',
  styleUrls: ['./add-edit-vac.component.scss']
})
export class AddEditVacComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() vac: any;
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
    this.Values = this.vac;
  }

  addVac(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addVacInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateVac(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateVacInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getVacInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
