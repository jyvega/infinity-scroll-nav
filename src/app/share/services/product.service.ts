import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) {
  }

  getProducts(offset: number, limit: number) {
    return this.httpClient.get(environment.urlAPI, {params: {offset: offset, limit: limit}})
      .toPromise();
  }
}
