import { async, ComponentFixture,inject, TestBed } from '@angular/core/testing';
import { ManageOrderComponent } from './manage-order.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from "ngx-pagination";
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {Order} from '../../order.model'
import { OrderService } from '../../order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../../notification.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ManageOrderComponent', () => {
  let component: ManageOrderComponent;
  let fixture: ComponentFixture<ManageOrderComponent>;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;
  let service: OrderService;
  let  _route: ActivatedRoute;
  let router: Router;
  let notifyService : NotificationService

  beforeEach(async(() => {
    service = new OrderService(null);
    component = new ManageOrderComponent(service,_route,router,notifyService);
    TestBed.configureTestingModule({
      declarations: [ ManageOrderComponent ],
      imports: [HttpClientTestingModule, ToastrModule.forRoot(),NgxPaginationModule,FormsModule,RouterTestingModule]
    })
    .compileComponents();
    httpClient=TestBed.get(HttpClient);
    httpTestingController=TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(ManageOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created :ManageOrderComponent', () => {
    expect(component).toBeTruthy();
  });
 
  
  xit('should set order details with the items returned from the server', async() => {
    const allOrder: any = [
    {oname: "Televisions",
    description: "LG",
    name: "oshi@gmail.com",
    date: "2020-08-23",
    status: "Accepted",
    password: "oshi",
    cname: "oshi",
    mobile: "1234567890",
    pdate: "2020-08-20",
    ddate: "2020-08-29",
    gdesc: "with offer",
    gwt: "3.5",
    sadd: "pune",
    sloca: "pune",
    dadd: "bhopal",
    dloca: "bhopal",
    transport: "Air Premium",
    id: "R527"},
    {oname: "Pen",
    description: "reynold",
    name: "oshi@gmail.com",
    date: "2020-08-23",
    status: "In Progress",
    password: "oshi",
    cname: "oshi",
    mobile: "1234567890",
    pdate: "2020-08-20",
    ddate: "2020-08-21",
    gdesc: "cartoon box",
    gwt: "7.7",
    sadd: "pune",
    sloca: "pune",
    dadd: "bhopal",
    dloca: "bhopal",
    transport: "Air Premium",
    id: "R352"}];
  spyOn(service, 'manageOrder').and.callFake(() => {
      return Observable.from(allOrder)
    });

    component.ngOnInit();
    expect(component.allOrder).toEqual(allOrder);
    });
});


















// it('should render products in a table element', async(() => {
  //   fixture = TestBed.createComponent(ManageOrderComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('body > app-root > app-manage-order > div.container > table > tbody > tr:nth-child(1) > td:nth-child(2)').textContent).toContain('Televisions');
  //   // expect(compiled.querySelector('table').textContent).toContain('ORDER NAME');
  //   // expect(compiled.querySelector('table').textContent).toContain('DESCRIPTION');
  //   // expect(compiled.querySelector('table').textContent).toContain('REQUESTER');
  //   // expect(compiled.querySelector('table').textContent).toContain('DATE');
  //   // expect(compiled.querySelector('table').textContent).toContain('STATUS');
  //   // expect(compiled.querySelector('table').textContent).toContain('EDIT');
  //   // expect(compiled.querySelector('table').textContent).toContain('DELETE');
  // }));




  // it("should have a onClose method", () => {
  //   component.showToasterSuccess();
  //   fixture.detectChanges();
  //   expect(component.showToasterSuccess).toBeTruthy();
  // })

  // spyOn(service, 'getProducts').and.returnValue(Observable.from([products]));

    // Act - Make the actual call
// Assert - Check and report whether the test is pass or fail