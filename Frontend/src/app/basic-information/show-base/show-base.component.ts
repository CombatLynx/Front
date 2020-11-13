import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-show-base',
  templateUrl: './show-base.component.html',
  styleUrls: ['./show-base.component.scss']
})
export class ShowBaseComponent implements OnInit {

  constructor(private service: SharedService) { }

  BasicInformationList: any = [];

  ModalTitle: string;
  ActivateAddEditBaseComp = false;
  base: any;

  ngOnInit(): void {
    this.refreshBaseList();
  }

  addClick(){
    this.base = {
      BIid: 0,
      BIregDate: '',
      BIaddress: '',
      BIworkTime: '',
      BItelephone: '',
      BIfaxes: '',
      BIemail: '',
      BIaddressPlace: ''
    };
    this.ModalTitle = 'Add BasicInformation';
    this.ActivateAddEditBaseComp = true;

  }

  editClick(item){
    console.log(item);
    this.base = item;
    this.ModalTitle = 'Edit BasicInformation';
    this.ActivateAddEditBaseComp = true;
  }

  deleteClick(item){
    if (confirm('Вы действительно хотите удалить эти данные?')){
      this.service.deleteBasicInformation(item.BIid).subscribe(data => {
        alert(data.toString());
        this.refreshBaseList();
      });
    }
  }

  renderClick(item){
    if (confirm('Вы действительно хотите опубликовать эти данные?')){
      this.service.publishData(item.BIid).subscribe(data => {
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
    this.service.getBaseList().subscribe(data => {
      this.BasicInformationList = data;
    });
  }

}
