import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionService } from '../transaction.service';
import { SuccessfulOrUnsuccessfulComponent } from './successful-or-unsuccessful.component';
import { of, throwError } from 'rxjs';

describe('SuccessfulOrUnsuccessfulComponent', () => {
  let component: SuccessfulOrUnsuccessfulComponent;
  let fixture: ComponentFixture<SuccessfulOrUnsuccessfulComponent>;

  beforeEach(() => {
    const transactionServiceStub = {
      getByStatus: arg1 => { }
    }
    TestBed.configureTestingModule({
      declarations: [SuccessfulOrUnsuccessfulComponent],
      providers: [
        { provide: TransactionService, useValue: transactionServiceStub }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(SuccessfulOrUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onDisplay', () => {
    it('should call onDisplay success', () => {
      const spy = spyOn(component['transactionService'], 'getByStatus').and.returnValue(of({}));
      component.onDisplay();
      expect(spy).toHaveBeenCalled();
    });

    it('should call onDisplay error', () => {
      const spy = spyOn(component['transactionService'], 'getByStatus').and.returnValue(throwError({}));
      component.onDisplay();
      expect(spy).toHaveBeenCalled();
    });
  });
});
