import { SuccessDialogComponent } from "./../success-dialog/success-dialog.component";
import { CartDetailsService } from "./../services/cart-details.service";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {
  count = 0;
  totalCount = 0;
  totalPrice = 0;
  showFooter = false;
  productDetails: any[] = [];
  purchedProducts: any[] = [];
  constructor(
    private cartDetailsService: CartDetailsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.cartDetailsService.fetchData().subscribe((res) => {
      this.productDetails = res;
    });
  }
  addToCart(product) {
    product.productCount++;
    this.totalCount++;
    this.totalPrice += product.price;
    let x = this.purchedProducts.find(
      (item) => item.productName === product.productName
    );
    // console.log(this.purchedProducts);

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
  checkout() {
    // console.log(".........................");
    if (this.totalPrice <= 0) {
    } else {
      this.dialog.open(SuccessDialogComponent, {
        width: "250px",
        // height: "300px",
        data: {
          totalPrice: this.totalPrice,
        },
      });
    }
  }
}
