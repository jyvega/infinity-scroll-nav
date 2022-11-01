import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./share/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'infinity-scroll-nav';
  products: Product[] = [];

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.httpClient.get('https://api.escuelajs.co/api/v1/products')
      .toPromise()
      .then(value => {
        this.products = !!value ? value as Array<Product> : []
      })
      .catch(reason => console.log(reason))
  }
}
