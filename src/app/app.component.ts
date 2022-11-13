import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "./share/interfaces";
import {ProductService} from "./share/services/product.service";
import {FormControl} from "@angular/forms"
import {debounceTime, Subscription, tap} from "rxjs";
import {FilterPipe} from "./share/pipes/filter.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'infinity-scroll-nav';
  products: Product[] = [];
  productsFiltered: Product[] = [];
  offset: number = 0;
  limit: number = 12;
  searchControl = new FormControl();
  subscriptions: Subscription[] = [];
  filterPipe = new FilterPipe();

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.products = [];
    this.productsFiltered = [];

    this.commonGetProducts();

    addEventListener('scroll', () => {
      if (Math.trunc(window.scrollY) == document.documentElement.scrollHeight - window.innerHeight) {
        this.commonGetProducts();
      }
    }, {passive: true});

    let sub = this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        tap(word => this.productsFiltered = this.filterPipe.transform(this.products, 'title', word)))
      .subscribe();

    this.subscriptions.push(sub);
  }

  commonGetProducts() {
    this.productService.getProducts(this.offset, this.limit)
      .then(value => {
        this.products.push(...value as Array<Product>);
        this.productsFiltered = this.filterPipe.transform(this.products, 'title', this.searchControl.value);
        if (this.products.length > 0) {
          this.offset += this.limit;
        }
      })
      .catch(reason => console.log(reason));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  trackByFn = (index: number, p: Product) => index;
}
