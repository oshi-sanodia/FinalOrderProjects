import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule,Routes} from '@angular/router';

@NgModule({
  declarations: [EditOrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  exports:[EditOrderComponent]
})
export class LoginModule { }
