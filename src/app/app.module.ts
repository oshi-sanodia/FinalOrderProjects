import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditOrderComponent } from './login/edit-order/edit-order.component';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {OrderService} from "./order.service";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {LoginModule} from './login/login.module';
import {AdminModule} from './admin/admin.module';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    LoginModule,
    AdminModule,
    UserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'about',pathMatch:'full'},
      {path:'about', component:EditOrderComponent},
    ])
  ],
  
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
