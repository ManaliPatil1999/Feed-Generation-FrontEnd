import { Component, OnInit } from '@angular/core';
import { TransactionService } from "../transaction.service";
import { UploadModel } from "../UploadModel";

@Component({
  selector: 'app-successful-or-unsuccessful',
  templateUrl: './successful-or-unsuccessful.component.html',
  styleUrls: ['./successful-or-unsuccessful.component.css']
})
export class SuccessfulOrUnsuccessfulComponent implements OnInit {

  upload: any;

  UploadModel: UploadModel = new UploadModel()
  uploadModel: UploadModel = {
    amount: null,
    date: null,
    payer: null,
    payee: null,
    id: 0,
    transactionRef: null,
    status: null,
    feedgenerated: null,
    reason: null
  }
  display = false;
  Status = "";

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  public onDisplay() {
    this.transactionService.getByStatus(this.UploadModel.status)
      .subscribe((data) => this.upload = data,
        (error) => console.error(error));
    this.display = true;
  }
}
