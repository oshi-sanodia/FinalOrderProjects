import { TestBed,async , inject } from '@angular/core/testing';
import { NotificationService } from './notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

describe('NotificationService', () => {
let browseranimation:BrowserAnimationsModule;
let toaster:ToastrModule;

beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule,ToastrModule.forRoot()]
    });
   browseranimation=TestBed.get(BrowserAnimationsModule);
   toaster=TestBed.get(ToastrModule);
  });

it('should be created :NotificationService', inject([NotificationService],(service:NotificationService) => {
    expect(service).toBeTruthy();
  }));
});
