import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-librares',
  templateUrl: './add-edit-librares.component.html',
  styleUrls: ['./add-edit-librares.component.scss']
})
export class AddEditLibraresComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() librares: any;
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
    this.Values = this.librares;
  }

  addLibrares(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addLibraresInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateLibrares(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateLibraresInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getLibraresInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}
