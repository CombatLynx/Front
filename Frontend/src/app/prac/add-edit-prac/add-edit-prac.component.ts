import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-prac',
  templateUrl: './add-edit-prac.component.html',
  styleUrls: ['./add-edit-prac.component.scss']
})
export class AddEditPracComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() prac: any;
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
    this.Values = this.prac;
  }

  addSpecPracs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addSpecPracsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateSpecPracs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateSpecPracsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getSpecPracsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
