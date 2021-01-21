import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-healt',
  templateUrl: './add-edit-healt.component.html',
  styleUrls: ['./add-edit-healt.component.scss']
})
export class AddEditHealtComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() healt: any;
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
    this.Values = this.healt;
  }

  addHealts(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addHealtsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateHealts(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateHealtsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getHealtsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
