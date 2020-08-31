import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../order.service';
import { FormControl, Validators } from '@angular/forms';
import {FormGroup} from '@angular/forms';
import { NotificationService } from '../../notification.service';
import * as moment from 'moment';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})

export class ViewOrderComponent implements OnInit {
  public transport: string;
  public sloca: string;
  public dloca: string;
  desCity:string;
  soucCity:string;
  todayDate=new Date();
  minDate = moment(new Date()).format('YYYY-MM-DD')  
 
  dData(desCity:string){
    this.desCity=desCity;
    }
  sourceData(soucCity:string){
    this.soucCity=soucCity;
    }
  setMode(){
    if(this.desCity==this.soucCity){
     return true;
    }
    else{
     return false;
    }
  }
  
   alert:boolean=false;
   addingOrder=new FormGroup(
  
    {
       oname:new FormControl(''),
       description:new FormControl(''),
       name:new FormControl(''),
       date:new FormControl(''),
       status:new FormControl(''),
       password:new FormControl(''),
       cname:new FormControl(''),
       mobile:new FormControl(''),
       pdate:new FormControl(''),
       ddate:new FormControl(''),
       gdesc:new FormControl(''),
       gwt:new FormControl(''),
       sadd:new FormControl(''),
       sloca:new FormControl(''),
       dadd:new FormControl(''),
       dloca:new FormControl(''),
       transport:new FormControl('')

    }
   )

  constructor(private orderService:OrderService, private _route: ActivatedRoute, private router: Router, private notifyService : NotificationService) {
   }

  showToasterSuccess(){
    this.notifyService.showSuccess("Order is Updated", "Successfully")
}

  ngOnInit(): void {
    console.log(this._route.snapshot.params.id)
    this.orderService.getCurrentData(this._route.snapshot.params.id).subscribe((result)=>{
    this.addingOrder=new FormGroup(
  
        {
           oname:new FormControl(result['oname']),
           description:new FormControl(result['description']),
           name:new FormControl(result['name']),
           date:new FormControl(result['date']),
           status:new FormControl(result['status']),
           password:new FormControl(result['password']),
           cname:new FormControl(result['cname']),
           mobile:new FormControl(result['mobile']),
           pdate:new FormControl(result['pdate']),
           ddate:new FormControl(result['ddate']),
           gdesc:new FormControl(result['gdesc']),
           gwt:new FormControl(result['gwt']),
           sadd:new FormControl(result['sadd']),
           sloca:new FormControl(result['sloca']),
           dadd:new FormControl(result['dadd']),
           dloca:new FormControl(result['dloca']),
           transport:new FormControl(result['transport'])

        }
       )
    })
  }
  editOrder(){
    this.orderService.editOrder(this._route.snapshot.params.id,this.addingOrder.value).subscribe((result)=>{
    this.router.navigate(['/home']);
    })
  }
}
