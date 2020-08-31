import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs'
import {Order} from './order.model'

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  public allOrders;
  public currentOrder;
  private order: Order[] = [];


  URL="http://localhost:3000/users"

  constructor(private _http:HttpClient) { }

  createOrder(user){
    return this._http.post("http://localhost:3000/users",user);
  }
  
  manageOrder(){
    return this._http.get("http://localhost:3000/users")
  }

  editOrder(id,order){
    return this._http.put(`${this.URL}/${id}`,order)
  }
  
  getCurrentData(id){
    return this._http.get(`${this.URL}/${id}`)
  }

}
