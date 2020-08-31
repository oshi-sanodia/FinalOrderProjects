import { async, ComponentFixture,inject, TestBed } from '@angular/core/testing';
import { UserhomeComponent } from './userhome.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from "ngx-pagination";
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserhomeComponent', () => {
  let component: UserhomeComponent;
  let fixture: ComponentFixture<UserhomeComponent>;
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserhomeComponent ],
      imports: [HttpClientTestingModule, ToastrModule.forRoot(),NgxPaginationModule,FormsModule,RouterTestingModule]
    })
    .compileComponents();
    httpClient=TestBed.get(HttpClient);
    httpTestingController=TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(UserhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created :UserhomeComponent', () => {
    expect(component).toBeTruthy();
  });
});
