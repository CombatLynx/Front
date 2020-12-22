import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-cab',
  templateUrl: './add-edit-cab.component.html',
  styleUrls: ['./add-edit-cab.component.scss']
})
export class AddEditCabComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() cab: any;
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
    this.Values = this.cab;
  }

  addSpecCabs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addSpecCabsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateSpecCabs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateSpecCabsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getSpecCabsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }

}

