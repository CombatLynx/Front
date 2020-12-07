import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-vol',
  templateUrl: './add-edit-vol.component.html',
  styleUrls: ['./add-edit-vol.component.scss']
})
export class AddEditVolComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() vol: any;
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
    this.Values = this.vol;
  }

  addVolume(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addVolumeInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateVolume(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateVolumeInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getVolumeInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
