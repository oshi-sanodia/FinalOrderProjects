import { async, ComponentFixture,inject,  TestBed } from '@angular/core/testing';
import { EditOrderComponent } from './edit-order.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from "ngx-pagination";
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditOrderComponent', () => {
  let component: EditOrderComponent;
  let fixture: ComponentFixture<EditOrderComponent>;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;
  
beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrderComponent ],
      imports: [HttpClientTestingModule, ToastrModule.forRoot(),NgxPaginationModule,FormsModule,RouterTestingModule]
    })
    .compileComponents();
    httpClient=TestBed.get(HttpClient);
    httpTestingController=TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(EditOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created :EditOrderComponent', () => {
    expect(component).toBeTruthy();
  });
});
