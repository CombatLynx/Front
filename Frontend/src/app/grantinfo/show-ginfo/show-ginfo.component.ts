import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-show-ginfo',
  templateUrl: './show-ginfo.component.html',
  styleUrls: ['./show-ginfo.component.scss']
})
export class ShowGinfoComponent implements OnInit {

  constructor(private service: SharedService) { }

  GrantInfosInfoList: any = [];
  TableFormat: any = [];

  ModalTitle: string;
  ActivateAddEditBaseComp = false;
  base: any;

  ngOnInit(): void {
    this.refreshBaseList();
  }

  addClick(){
    this.base = {};
    this.ModalTitle = 'Add GrantInfosInfo';
    this.ActivateAddEditBaseComp = true;

  }

  editClick(item){
    console.log(item);
    this.base = item;
    this.ModalTitle = 'Edit GrantInfosInfo';
    this.ActivateAddEditBaseComp = true;
  }

  deleteClick(item){
    if (confirm('Вы действительно хотите удалить эти данные?')){
      this.service.deleteGrantInfosInfo(item[0]).subscribe(data => {
        alert(data.toString());
        this.refreshBaseList();
      });
    }
  }

  renderClick(){
    if (confirm('Вы действительно хотите опубликовать эти данные?')){
      this.service.publishGrantInfosInfo().subscribe(data => {
        alert(data.toString());
        this.refreshBaseList();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditBaseComp = false;
    this.refreshBaseList();
  }


  refreshBaseList(){
    this.service.getGrantInfosInfoList().subscribe(data => {
      const arr: any[] = [];
      // tslint:disable-next-line:forin
      for (const item of data.data) {
        const tmp: any[] = [];
        // tslint:disable-next-line:forin
        for (const key in item) {
          tmp.push(item[key]);
        }
        arr.push(tmp);
      }
      this.GrantInfosInfoList = arr;
      this.TableFormat = data.format;
      console.log(arr);
    });
  }

}
