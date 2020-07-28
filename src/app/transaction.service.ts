import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadModel } from './UploadModel';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  public getByStatus(status): Observable<any> {
    return this.http.get("http://localhost:8080/transaction/getStatus/" + status);
  }

  public GetTransaction(fileName) {
    return this.http.post("http://localhost:8080/transaction/upload/"+fileName, UploadModel, { responseType: "text" as "json" });
  }

  public  getAll(){
    return this.http.get("http://localhost:8080/transaction/get");
    }

  public generateFeedFile(){
    return this.http.get("http://localhost:8080/transaction/generatefeedfile")
  }  

}
