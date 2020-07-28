import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadComponent } from './upload.component';
import { of, throwError } from 'rxjs';
import { TransactionService } from '../transaction.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(() => {
    const transactionServiceStub = {
      onUpload: arg1 => { }
    }
    TestBed.configureTestingModule({
      declarations: [UploadComponent],
      providers: [
        { provide: TransactionService, useValue: transactionServiceStub }
      ],
     imports: [
         { HttpClientTestingModule
        }
      ],
   
  
    }).compileComponents();
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handelFileInputsuccess', () => {
    const spy = spyOn(component['transactionService'], 'GetTransaction').and.returnValue(of({}));
    component.handelFileInput(event);
    expect(spy).toHaveBeenCalled();
  });
  describe('onUpload', () => {
    it('should call handelFileInput success', () => {
      const spy = spyOn(component['transactionService'], 'GetTransaction').and.returnValue(of({}));
      component.onUpload();
      expect(spy).toHaveBeenCalled();
    });

    it('should call onUpload error', () => {
      const spy = spyOn(component['transactionService'], 'GetTransaction').and.returnValue(throwError({}));
      component.onUpload();
      expect(spy).toHaveBeenCalled();
    });
  });
});
