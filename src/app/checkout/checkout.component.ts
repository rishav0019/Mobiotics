import { CartDetailsService } from "./../services/cart-details.service";
import { Component, OnInit } from "@angular/core";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {
  count = 0;
  totalCount = 0;
  totalPrice = 0;

  productDetails: any[] = [];
  purchedProducts: any[] = [];
  constructor(private cartDetailsService: CartDetailsService) {}

  ngOnInit() {
    this.productDetails = this.cartDetailsService.items;
    // console.log(this.productDetails);
  }
  addToCart(product) {
    product.productCount++;
    this.totalCount++;
    this.totalPrice += product.price;
    let x = this.purchedProducts.find(
      (item) => item.productName === product.productName
    );
    console.log(this.purchedProducts);

    if (!x) {
      this.purchedProducts.push(product);

      // this.totalPrice += product.price;
    } else {
      this.count = ++this.count;
    }
  }
  removeOneItem(product) {
    if (product.productCount > 0) {
      product.productCount--;
      this.totalCount--;
      this.totalPrice -= product.price;
    }
  }
  addOneItem() {}
}
