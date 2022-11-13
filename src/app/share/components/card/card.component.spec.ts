import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CardComponent} from './card.component';
import {Product} from "../../interfaces";

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  const product: Product = {
    id: 1,
    category: {
      id: 1,
      image: '',
      name: 'category 1'
    },
    description: 'Product description',
    images: [],
    price: 450,
    title: 'Product'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
