import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PopupService } from "../popup/popup.service";

import { Product, products } from "../products";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router,
    private popUpService: PopupService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.popUpService.showAsElement(
      "Your product '" + product.name + "' has been added to the cart!"
    );
    this.router.navigate(["/", "cart"]);
  }
}
