import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})

export class EditOrderComponent implements OnInit {
  allOrder: any;
  alert:boolean=false;
  email:string;
  password:string;
  myid:string;
  mypswd:string;

constructor(private orderService:OrderService, private _route: ActivatedRoute, private router: Router) { }

ngOnInit(): void {
    this.getLatestOrderhh();  
}

getLatestOrderhh(){
  this.orderService.manageOrder().subscribe((response)=>{
  this.allOrder=response
  for(var f=0;f<=this.allOrder.length;f++){
  this.myid=this.allOrder[f].name
  this.mypswd=this.allOrder[f].password
  if(this.email==this.myid&&this.password==this.mypswd){
    this.router.navigate(["../../user/"+this.myid])
    break;
   }
  if(this.email=="admin" && this.password=="admin"){
    this.router.navigate(["../../home"])
    break;
   }
  }
  })
 }
}






// if((this.email!==this.myid&&this.password!==this.mypswd)&&(this.email!=="admin" && this.password!=="admin")){
  //   window.alert("Please Enter Valid Details");
  //   }
