import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { TransactionService } from "../transaction.service";
import { UploadModel } from "../UploadModel";

import { HttpEventType, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
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
  submitted = false;
  constructor(private httpClient: HttpClient, private transactionService: TransactionService) { }

  userFile: any;
  fileName = " ";
  ngOnInit() {

  }
  handelFileInput(event) {
    const file = event.target.files;
    this.userFile = file;
    this.fileName = event.target.files[0].name;

  }

  public onUpload() {
    console.log("name=-----------" + this.fileName)
    this.transactionService.GetTransaction(this.fileName).
    subscribe((data) => this.upload = data,
      (error) => console.error(error));
    this.submitted = true;

  }



}
