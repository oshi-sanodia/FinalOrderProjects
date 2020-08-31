import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../notification.service';


@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})

export class ManageOrderComponent implements OnInit {
allOrder: any;
totalRec : number;
page: number = 1;


constructor(private orderService:OrderService, private _route: ActivatedRoute, private router: Router, private notifyService : NotificationService) { }

showToasterSuccess(){
    this.notifyService.showSuccess("Order is Cancelled", "Successfully")
}

ngOnInit(): void {
  this.getLatestOrder();
}

 getLatestOrder(){
     this.orderService.manageOrder().subscribe((response:[])=>{
     this.allOrder=response
     this.totalRec=this.allOrder.length;
    }) 
 }

 deleteOrder(order){
   order.status="Cancelled"
   
   let user = {
    oname: order.oname,
    description: order.description,
    name: order.name,
    date: order.date,
    status: 'Cancelled',
    password:order.password,
    cname:order.cname,
    mobile:order.mobile,
    pdate:order.pdate,
    ddate:order.ddate,
    gdesc:order.gdesc,
    gwt:order.gwt,
    sadd:order.sadd,
    sloca:order.sloca,
    dadd:order.dadd,
    dloca:order.dloca,
    transport:order.transport,
    id:order.id
  }
  this.orderService.editOrder(order.id,user).subscribe((result)=>{
  this.router.navigate(['/home']);
   })
  }
}
