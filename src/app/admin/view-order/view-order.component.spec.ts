import { async, ComponentFixture,inject, TestBed } from '@angular/core/testing';
import { ViewOrderComponent } from './view-order.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from "ngx-pagination";
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {ReactiveFormsModule} from "@angular/forms";
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ViewOrderComponent', () => {
  let component: ViewOrderComponent;
  let fixture: ComponentFixture<ViewOrderComponent>;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;
  let de:DebugElement;
  let el:HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrderComponent ],
      imports: [HttpClientTestingModule, ToastrModule.forRoot(),NgxPaginationModule,ReactiveFormsModule,FormsModule,RouterTestingModule]
    })
    .compileComponents().then(()=>{
    httpClient=TestBed.get(HttpClient);
    httpTestingController=TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(ViewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de=fixture.debugElement.query(By.css('form'));
    el=de.nativeElement;
    });
  }));

  it('should be created :ViewOrderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('edit order form should be valid', async(() => {
    component.addingOrder.controls['oname'].setValue('Televisions');
    component.addingOrder.controls['description'].setValue('LG');
    component.addingOrder.controls['name'].setValue('oshi@gmail.com');
    component.addingOrder.controls['date'].setValue('2020-08-23');
    component.addingOrder.controls['status'].setValue('Accepted');
    component.addingOrder.controls['password'].setValue('oshi');
    component.addingOrder.controls['cname'].setValue('oshi');
    component.addingOrder.controls['mobile'].setValue('1234567890');
    component.addingOrder.controls['pdate'].setValue('2020-08-20');
    component.addingOrder.controls['ddate'].setValue('2020-08-29');
    component.addingOrder.controls['gdesc'].setValue('with offer');
    component.addingOrder.controls['gwt'].setValue('3.5');
    component.addingOrder.controls['sadd'].setValue('pune');
    component.addingOrder.controls['sloca'].setValue('pune');
    component.addingOrder.controls['dadd'].setValue('bhopal');
    component.addingOrder.controls['dloca'].setValue('bhopal');
    component.addingOrder.controls['transport'].setValue('Air Premium');
    expect(component.addingOrder.valid).toBeTruthy();
  }));

  it('edit order form should be invalid', async(() => {
    component.addingOrder.controls['oname'].setValue('');
    component.addingOrder.controls['description'].setValue('');
    component.addingOrder.controls['name'].setValue('');
    component.addingOrder.controls['date'].setValue('');
    component.addingOrder.controls['status'].setValue('');
    component.addingOrder.controls['password'].setValue('');
    component.addingOrder.controls['cname'].setValue('');
    component.addingOrder.controls['mobile'].setValue('');
    component.addingOrder.controls['pdate'].setValue('');
    component.addingOrder.controls['ddate'].setValue('');
    component.addingOrder.controls['gdesc'].setValue('');
    component.addingOrder.controls['gwt'].setValue('');
    component.addingOrder.controls['sadd'].setValue('');
    component.addingOrder.controls['sloca'].setValue('');
    component.addingOrder.controls['dadd'].setValue('');
    component.addingOrder.controls['dloca'].setValue('');
    component.addingOrder.controls['transport'].setValue('');
    expect(component.addingOrder.valid).toBeFalsy();
  }));

  it('call editOrder() method', async(() => {
    component.editOrder();
    fixture.detectChanges();
    spyOn(component,'editOrder')
    el=fixture.debugElement.query(By.css('button')).nativeElement
    el.click();
    expect(component.editOrder).toHaveBeenCalledTimes(0);
  }));

});






















