import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-show-plat',
  templateUrl: './show-plat.component.html',
  styleUrls: ['./show-plat.component.scss']
})
export class ShowPlatComponent implements OnInit {

  constructor(private service: SharedService) { }

  PlatInfoList: any = [];
  TableFormat: any = [];
  TableFormatTypes: any = [];
  ModalTitle: string;
  ActivateAddEditBaseComp = false;
  base: any;

  ngOnInit(): void {
    this.refreshBaseList();
  }

  addClick(){
    this.base = {};
    this.ModalTitle = 'Add PlatInfo';
    this.ActivateAddEditBaseComp = true;

  }

  editClick(item){
    console.log(item);
    this.base = item;
    this.ModalTitle = 'Edit PlatInfo';
    this.ActivateAddEditBaseComp = true;
  }

  deleteClick(item){
    if (confirm('Вы действительно хотите удалить эти данные?')){
      this.service.deletePlatInfo(item[0]).subscribe(data => {
        alert(data.toString());
        this.refreshBaseList();
      });
    }
  }

  renderClick(){
    if (confirm('Вы действительно хотите опубликовать эти данные?')){
      this.service.publishPlatInfo().subscribe(data => {
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
    this.service.getPlatInfoList().subscribe(data => {
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
      this.PlatInfoList = arr;
      this.TableFormat = data.format;
      this.TableFormatTypes = data.types;
      console.log(arr);
    });
  }

  downloadFileFromServer(filename: string) {
    console.log('downloading ' + filename);
    this.service.downloadFile(filename);
  }

  downloadFile(data: any) {
    console.log(data);
    const blob = new Blob([data]);
    const url = window.URL.createObjectURL(blob);
    const pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed === undefined) {
      alert( 'Please disable your Pop-up blocker and try again.');
    }
  }

}
