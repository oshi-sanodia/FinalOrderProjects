import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserhomeComponent } from './userhome/userhome.component';
import {RouterModule,Routes} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [UserhomeComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {path:'user/:name', component:UserhomeComponent}
    ])
  ],
  exports:[UserhomeComponent]
})
export class UserModule { }
