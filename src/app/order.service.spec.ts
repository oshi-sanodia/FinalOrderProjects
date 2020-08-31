import { TestBed,async , inject, flush } from '@angular/core/testing';
import { OrderService } from './order.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Order} from './order.model'

describe('HttpClient testing', () => {
  let service: OrderService;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;

beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrderService]
    });
    service = TestBed.inject(OrderService);
    httpClient=TestBed.get(HttpClient);
    httpTestingController=TestBed.get(HttpTestingController);
  });

it('should be created :OrderService', inject([OrderService],(service:OrderService) => {
    expect(service).toBeTruthy();
  }));

it('should get the correct Order details of given order Id', () => {
  const dummyUsers = [{ 
    oname: "Televisions",
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
    id: "R-527" }]; 
  service.getCurrentData('R-527').subscribe((data: any) => {
    console.log(data)
    expect(data).toBe(dummyUsers);
  });
  const req = httpTestingController.expectOne(`http://localhost:3000/users/R-527`, 'call to api');
  expect(req.request.method).toBe('GET');
  req.flush(dummyUsers);
  httpTestingController.verify();
});

it('should get all Order details successfully', () => {
  const dummyUsers:Order[] = [{ 
    oname: "Televisions",
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
    id: "R-527" },
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
    id: "R-352"}];
  service.manageOrder().subscribe(data => {
  expect(data).toEqual(dummyUsers);
  console.log(data)
  });
  const req = httpTestingController.expectOne(`http://localhost:3000/users`, 'call to api');
  expect(req.request.method).toBe('GET');
  req.flush(dummyUsers);
  httpTestingController.verify();
});
 
it('should post the correct Order details', () => {
  const dummyUsers = [{ 
      oname: "Dressing Table",
      description: "wooden",
      name: "manisha@gmail.com",
      date: "2020-08-23",
      status: "Accepted",
      password: "manisha",
      cname: "manisha",
      mobile: "1234567890",
      pdate: "2020-08-20",
      ddate: "2020-08-21",
      gdesc: "with offer",
      gwt: "10",
      sadd: "indore",
      sloca: "indore",
      dadd: "bhopal",
      dloca: "bhopal",
      transport: "Ground Express",
      id: "R-222"}];
  service.createOrder(dummyUsers).subscribe((data: any) => {
    console.log(data)
    expect(data).toBe(dummyUsers);
    });
  const req = httpTestingController.expectOne(`http://localhost:3000/users`,'post to api');
  expect(req.request.method).toBe('POST');
  req.flush(dummyUsers);
  httpTestingController.verify();
});
 
it('should put the correct Order details', () => {
  const dummyUsers = [{ 
    oname: "Pen",
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
    id: "R-352"}];
  service.editOrder ('R-352', dummyUsers).subscribe((data: any) => {
    console.log(data)
    expect(data).toBe(dummyUsers);
    });
  const req = httpTestingController.expectOne(`http://localhost:3000/users/R-352`,'put to api');
  expect(req.request.method).toBe('PUT');
  req.flush(dummyUsers);
  httpTestingController.verify();
 });

it('should test 404 error',()=>{
  const errorMsg="mock 404 error occured";
  service.manageOrder().subscribe(
    (data)=>{
      fail('failing with error 404');
    },
    (error:HttpErrorResponse)=>{
      expect(error.status).toEqual(404);
      expect(error.error).toEqual(errorMsg);
    });
  const req=httpTestingController.expectOne('http://localhost:3000/users');
  req.flush(errorMsg,{status:404,statusText:'Not Found'});
});

});







