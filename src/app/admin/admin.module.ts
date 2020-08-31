import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule,Routes} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [ManageOrderComponent,CreateOrderComponent,ViewOrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      {path:'home', component:ManageOrderComponent},
      {path:'create', component:CreateOrderComponent},
      {path:'edit/:id', component:ViewOrderComponent}

    ])
  ],
  exports:[ManageOrderComponent,CreateOrderComponent,ViewOrderComponent]
})
export class AdminModule { }
