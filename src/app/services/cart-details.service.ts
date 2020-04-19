import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CartDetailsService {
  items = [
    {
      productName: "Milkfood Rich Desi Danedar Ghee(Carton)",
      brandName: "Milkfood",
      quantity: "1 L",
      price: 408,
      mrp: 498,
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/512rQiXQNyL.jpg",
      offerText: "20 % Off",
      productCount: 0,
    },
    {
      productName: "Amul Pure Desi Ghee(Carton)",
      brandName: "Amul",
      quantity: "500 Ml.",
      price: 200,
      mrp: 225,
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/512rQiXQNyL.jpg",
      offerText: "15 % Off",
      productCount: 0,
    },
    {
      productName: "Milkfood Rich Desi Danedar Ghee(Carton)",
      brandName: "Milkfood",
      quantity: "1 L",
      price: 408,
      mrp: 498,
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/512rQiXQNyL.jpg",
      offerText: "20 % Off",
      productCount: 0,
    },
  ];
  constructor() {}
}
