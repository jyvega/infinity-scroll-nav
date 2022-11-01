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
  offset: number = 0;
  limit: number = 8;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.products = [];
    this.getProducts();
    addEventListener('scroll', () => {
      if (Math.trunc(window.scrollY) == document.documentElement.scrollHeight - window.innerHeight) {
        this.getProducts();
      }
    }, {passive: true});
  }

  getProducts() {
    this.httpClient.get('https://api.escuelajs.co/api/v1/products', {
      params: {
        offset: this.offset,
        limit: this.limit
      }
    })
      .toPromise()
      .then(value => {
        this.products.push(...value as Array<Product>);
        if (this.products.length > 0) {
          this.offset += this.limit;
        }
      })
      .catch(reason => console.log(reason))
  }
}
