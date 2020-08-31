import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../notification.service';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})

export class CreateOrderComponent implements OnInit {
  @ViewChild('myForm',{static:true}) myForm:NgForm;
  public transport: string;
  public sloca: string;
  public dloca: string;
  uid="R-"+String(Math.floor(Math.random()*(999-100+1)+100));
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

constructor(private orderService:OrderService, private router: Router, private notifyService : NotificationService) { }

showToasterSuccess(){
    this.notifyService.showSuccess("is your order id", this.uid)
  }

ngOnInit(): void {
  }

public addOrder(userDetails):any {
  
    let user = {
      oname: userDetails.form.value.oname,
      description: userDetails.form.value.description,
      name: userDetails.form.value.name,
      date: userDetails.form.value.date,
      status: userDetails.form.value.status,
      password:userDetails.form.value.password,
      cname:userDetails.form.value.cname,
      mobile:userDetails.form.value.mobile,
      pdate:userDetails.form.value.pdate,
      ddate:userDetails.form.value.ddate,
      gdesc:userDetails.form.value.gdesc,
      gwt:userDetails.form.value.gwt,
      sadd:userDetails.form.value.sadd,
      sloca:userDetails.form.value.sloca,
      dadd:userDetails.form.value.dadd,
      dloca:userDetails.form.value.dloca,
      transport:userDetails.form.value.transport,
     id:this.uid
    }
    
    this.orderService.createOrder(user).subscribe(

      data => {
        //console.log("Blog Created");
        //console.log(data);
        //window.alert('Order Created Successfully!!');
        this.router.navigate(['/home']);
              },

     // error => {
       //console.log("Error..!!");
        //console.log(error.errorMessage);
      //  window.alert('some error occured'); 
      //          }
    )
  }
}
