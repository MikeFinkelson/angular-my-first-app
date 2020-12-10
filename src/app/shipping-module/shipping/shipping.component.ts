import { Component, OnInit } from "@angular/core";
import { interval, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { CartService, Shipping } from "../../services/cart.service";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent implements OnInit {
  shippingCosts: Observable<Array<Shipping>>;
  constructor(private cartService: CartService) {}
  ngOnInit() {
     this.shippingCosts = this.cartService.getShippingPrices();
    //setInterval(()=>{this.shippingCosts = this.cartService.getShippingPrices()},500);
    //this.shippingCosts = this.cartService.getShippingPrices();
    //this.cartService.getShippingPrices().pipe(tap((x: Array<Shipping>) => x.length))
  }
}
