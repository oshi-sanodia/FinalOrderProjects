import { async, ComponentFixture,inject, TestBed } from '@angular/core/testing';
import { CreateOrderComponent } from './create-order.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from "ngx-pagination";
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateOrderComponent', () => {
  let component: CreateOrderComponent;
  let fixture: ComponentFixture<CreateOrderComponent>;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrderComponent ],
      imports: [HttpClientTestingModule, ToastrModule.forRoot(),NgxPaginationModule,FormsModule,RouterTestingModule]
    })
    .compileComponents();
    httpClient=TestBed.get(HttpClient);
    httpTestingController=TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(CreateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created :CreateOrderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('create new order form should be valid', async(() => {
    component.myForm.controls['oname'].setValue('Televisions');
    component.myForm.controls['description'].setValue('LG');
    component.myForm.controls['name'].setValue('oshi@gmail.com');
    component.myForm.controls['date'].setValue('2020-08-23');
    component.myForm.controls['status'].setValue('Accepted');
    component.myForm.controls['password'].setValue('oshi');
    component.myForm.controls['cname'].setValue('oshi');
    component.myForm.controls['mobile'].setValue('1234567890');
    component.myForm.controls['pdate'].setValue('2020-08-20');
    component.myForm.controls['ddate'].setValue('2020-08-29');
    component.myForm.controls['gdesc'].setValue('with offer');
    component.myForm.controls['gwt'].setValue('3.5');
    component.myForm.controls['sadd'].setValue('pune');
    component.myForm.controls['sloca'].setValue('pune');
    component.myForm.controls['dadd'].setValue('bhopal');
    component.myForm.controls['dloca'].setValue('bhopal');
    component.myForm.controls['transport'].setValue('Air Premium');
    expect(component.myForm.valid).toBeTruthy();
  }));

  it('create new order form should be invalid', async(() => {
    component.myForm.controls['oname'].setValue('');
    component.myForm.controls['description'].setValue('');
    component.myForm.controls['name'].setValue('');
    component.myForm.controls['date'].setValue('');
    component.myForm.controls['status'].setValue('');
    component.myForm.controls['password'].setValue('');
    component.myForm.controls['cname'].setValue('');
    component.myForm.controls['mobile'].setValue('');
    component.myForm.controls['pdate'].setValue('');
    component.myForm.controls['ddate'].setValue('');
    component.myForm.controls['gdesc'].setValue('');
    component.myForm.controls['gwt'].setValue('');
    component.myForm.controls['sadd'].setValue('');
    component.myForm.controls['sloca'].setValue('');
    component.myForm.controls['dadd'].setValue('');
    component.myForm.controls['dloca'].setValue('');
    component.myForm.controls['transport'].setValue('');
    expect(component.myForm.valid).toBeFalsy();
  }));

});
