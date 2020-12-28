import {Component, Input, OnInit} from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-add-edit-job',
  templateUrl: './add-edit-job.component.html',
  styleUrls: ['./add-edit-job.component.scss']
})
export class AddEditJobComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() job: any;
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
    this.Values = this.job;
  }

  addJobs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(this.Values);
    console.log(json);
    this.service.addJobsInfoList(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  updateJobs(){
    const json = {id: this.Values[0]};
    for (let i = 0; i < this.Keys.length; i++) {
      json[String(this.Keys[i])] = String(this.Values[i]);
    }
    console.log(json);
    this.service.updateJobsInfo(json.id, json).subscribe(res => {
      alert(res.toString());
    });
  }

  refreshBaseList(){
    this.service.getJobsInfoFormat().subscribe(data => {
      this.Keys = data;
      console.log(data);
    });
  }
}
