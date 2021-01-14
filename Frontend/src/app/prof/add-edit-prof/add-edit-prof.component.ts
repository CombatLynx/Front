import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-prof',
  templateUrl: './add-edit-prof.component.html',
  styleUrls: ['./add-edit-prof.component.scss']
})
export class AddEditProfComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() prof: any;
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
    this.Values = this.prof;
  }

  addProfs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addProfsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateProfs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateProfsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getProfsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
