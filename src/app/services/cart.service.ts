import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Product, products } from "../products";

export interface Shipping {
  type: string;
  price: number;
}

@Injectable()
export class CartService {
  items: Array<Product> = [];
  shipping: Array<Shipping> = [];

  constructor(private http: HttpClient) {
    this.addToCart(products[0]);
  }

  addToCart(product: Product) {
    this.items.push(product);
  }
  removeFromCart(product: Product | number) {
    this.items.forEach((item, index, array) => {
      if (
        typeof product == "number" &&
        (product >= 0 && product < this.items.length)
      )
        array.splice(product, 1);
      else if (item === product) array.splice(index, 1);
    });
  }

  getItems(): Array<Product> {
    return this.items;
  }
  clearCart(): Array<Product> {
    this.items = <Array<Product>>[];
    return this.items;
  }

  getShippingPrices(): Observable<Array<Shipping>> {
    return this.http
      .get("../assets/shipping.json", {
        observe: "body",
        responseType: "json"
      })
      .pipe(map(value => <Array<Shipping>>value));
  }
}
