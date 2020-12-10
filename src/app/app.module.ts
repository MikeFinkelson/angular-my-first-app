import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertComponent } from "./product-alert/product-alert.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartService } from "./services/cart.service";
import { CartComponent } from "./cart/cart.component";
import { CartDeleteButtonComponent } from "./cart-delete-button/cart-delete-button.component";
import { RemoveDirectiveDirective } from "./directives/remove-directive.directive";
import { ShippingComponent } from "./shipping-module/shipping/shipping.component";
import { PopupComponent } from "./popup/popup.component";
import { PopupService } from "./popup/popup.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
    CartDeleteButtonComponent,
    RemoveDirectiveDirective,
    ShippingComponent,
    PopupComponent
  ],
  entryComponents: [PopupComponent],
  bootstrap: [AppComponent],
  providers: [CartService, PopupService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
