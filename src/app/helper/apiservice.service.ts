import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  // apiUrl = 'api/Product';
  apiurl: any;
  constructor(
    private http : HttpClient,
    @Inject("environment") public environment
    ){ }
    private handleError(error: any) {
      return throwError(error);
    }

//get all product data
  getproductlist(): Observable<any> {
    // this.apiurl = `api/${type}`;
    this.apiurl = this.environment.apiUrl+`api/Product`;
    console.log("Product List")
    console.log(this.apiurl);
    return this.http
      .get<any>(this.apiurl)
  }

  //add product data
    postProduct(data:any): Observable<any> {
      // this.apiurl = `api/${type}`;
      this.apiurl = this.environment.apiUrl + `api/Product`;
      console.log("Add product Details")
      console.log(this.apiurl);
      return this.http
        .post<any>(this.apiurl, data)
    }

}
