import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit
} from "@angular/core";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-cart-delete-button",
  templateUrl: "./cart-delete-button.component.html",
  styleUrls: ["./cart-delete-button.component.css"]
})
export class CartDeleteButtonComponent implements OnInit {
  @Input() productId: number;
  constructor(private cartService: CartService) {}
  ngOnInit() {}

  deleteItem() {
    this.cartService.removeFromCart(this.productId);
  }
}
