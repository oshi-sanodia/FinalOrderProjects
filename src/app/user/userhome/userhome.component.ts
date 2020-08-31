import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})

export class UserhomeComponent implements OnInit {
  allOrder: any[];
  userorders:any[]=[];
  o:any;
  buyer:any;
  totalRec : number;
  page: number = 1;

constructor(private orderService:OrderService, private _route: ActivatedRoute, private router: Router) { 
   this._route.params.subscribe(data=>{
   console.log(data);
   })
}

ngOnInit(): void {
  const namee=this._route.snapshot.paramMap.get('name');
  this.buyer=namee;
  this.getUserorder();
}

getUserorder(){
  this.orderService.manageOrder().subscribe((response:any[])=>{
  this.allOrder=response;
  for(let f=0;f<=this.allOrder.length;f++){
    if(this.buyer==this.allOrder[f].name)
    {
      this.o=this.allOrder[f];
      this.userorders.push(this.o)
    }
    this.totalRec=this.userorders.length;
    }
  });
 }
}