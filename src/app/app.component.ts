import {Component, OnInit} from '@angular/core';
import {Product} from "./share/interfaces";
import {ProductService} from "./share/services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'infinity-scroll-nav';
  products: Product[] = [];
  offset: number = 0;
  limit: number = 12;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.products = [];

    this.commonGetProducts();

    addEventListener('scroll', () => {
      if (Math.trunc(window.scrollY) == document.documentElement.scrollHeight - window.innerHeight) {
        this.commonGetProducts();
      }
    }, {passive: true});

  }

  commonGetProducts() {
    this.productService.getProducts(this.offset, this.limit)
      .then(value => {
        this.products.push(...value as Array<Product>);
        if (this.products.length > 0) {
          this.offset += this.limit;
        }
      })
      .catch(reason => console.log(reason));
  }
}
