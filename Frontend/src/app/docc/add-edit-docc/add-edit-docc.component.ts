import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-docc',
  templateUrl: './add-edit-docc.component.html',
  styleUrls: ['./add-edit-docc.component.scss']
})
export class AddEditDoccComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() docc: any;
  Keys: any[] = [];
  Values: any[] = [];
  Types: any[] = [];
  Files: Map<number, File> = new Map<number, File>();
  ngOnInit(): void {
    this.refreshBaseList();
    if (this.Values.length === 0) {
      // // tslint:disable-next-line:prefer-for-of
      // for (let i = 0; i < this.Values.length; i++) {
      //   this.Values.push('');
      // }
    }
    this.Values = this.docc;
    // tslint:disable-next-line:prefer-for-of
  }

  addDocc(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addDoccInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDocc(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    console.log(this.Files);
    this.service.updateDoccInfo(json.id, json).subscribe(res => {
      alert(res.toString());
      console.log(this.Files);
      for (const file of this.Files.values()) {
        console.log(file);
        this.service.uploadFile(file).subscribe(res2 => {
          alert(res2.toString());
        });
      }
    });
    // this.service.uploadFile(this.File).subscribe(res => {
    //   alert(res.toString());
    // });
  }

  refreshBaseList(){
    this.service.getDoccInfoFormat().subscribe(data => {
      this.Keys = data.format;
      this.Types = data.types;
      console.log(data);
    });
  }

  uploadFile(fileData: File, index: number) {
    console.log(fileData);
    console.log(fileData.name);
    this.Files.set(index, fileData);
    this.Values[index] = fileData.name;
    console.log(fileData.name);
  }

}
