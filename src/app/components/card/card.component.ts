import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../share/interfaces";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product!: Product;

  constructor() {
  }

  ngOnInit(): void {
  }

}
