import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedComponent } from './feed.component';
import { of, throwError } from 'rxjs';
import { TransactionService } from '../transaction.service';

describe('FeedComponent', () => {
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach(() => {
    const transactionServiceStub = {
      generateFeedFile: arg1 => { }
    }
    TestBed.configureTestingModule({
      declarations: [FeedComponent],
      providers: [
        { provide: TransactionService, useValue: transactionServiceStub }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(FeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
    describe('onGenerate', () => {
      it('should call onDisplay success', () => {
        const spy = spyOn(component['transactionService'], 'generateFeedFile').and.returnValue(of({}));
        component.onGenerate();
        expect(spy).toHaveBeenCalled();
      });
  
      it('should call onDisplay error', () => {
        const spy = spyOn(component['transactionService'], 'generateFeedFile').and.returnValue(throwError({}));
        component.onGenerate();
        expect(spy).toHaveBeenCalled();
      });

  });
});
