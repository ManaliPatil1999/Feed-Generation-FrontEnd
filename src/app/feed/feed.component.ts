import { Component, OnInit } from '@angular/core';
import { TransactionService } from "../transaction.service";
import {UploadModel} from "../UploadModel";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  upload: any;

  UploadModel: UploadModel= new UploadModel()
  uploadModel : UploadModel = {
    amount : null,
    date: null,
    payer : null,
    payee : null,
    id : 0,
    transactionRef : null,
    status : null,
    feedgenerated : null, 
    reason:null
  }
  generate = false;
  flag=false;
  
  constructor( private transactionservice: TransactionService) { }

  ngOnInit(): void {
  }

  public onGenerate(){ 

    this.transactionservice.generateFeedFile().subscribe((data)=>{ this.upload=data ,
      (error) => console.error(error)
    console.log(this.upload)
    if(this.upload === 0)
    {
      this.flag=false;
      this.generate=true;
    }else{
      this.flag= true;
      this.generate=true;
    }});
    console.log("FEED SUCCESSFULLY GENERATED..!")
  }

}
