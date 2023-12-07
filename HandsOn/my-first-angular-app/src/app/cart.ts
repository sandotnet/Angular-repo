export class Cart {
  public productName?: string;
  public price: number = 0;
  public discount: number = 0;
  // public dp: number = 0;
  public qty: number = 0;
  // public tot: number = 0;
  constructor(
    productName: string,
    price: number,
    discount: number,
    qty: number
  ) {
    this.productName = productName;
    this.price = price;
    this.discount = discount;
    this.qty = qty;
    // this.dp = this.price - (this.price * this.discount) / 100;
    // this.tot = this.dp * this.qty;
  }
}
