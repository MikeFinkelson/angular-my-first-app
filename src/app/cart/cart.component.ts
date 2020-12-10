import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { PopupService } from "../popup/popup.service";
import { Product } from "../products";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items: Array<Product>;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private popUpService: PopupService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: ""
    });
  }

  onSubmit(customerData) {
    if (customerData.name) {
      this.popUpService.showAsElement(
        "Shipping is submited for '" + customerData.name + "'"
      );
      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
    } else {
      this.popUpService.showAsElement("Please type your name.");
    }
  }
}
