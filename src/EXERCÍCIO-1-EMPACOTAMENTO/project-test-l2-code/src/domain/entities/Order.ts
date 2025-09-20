import { Product } from "./Product"

export class Order{
    order_id: number
    products: Product[]


    constructor(pedido_id: number, products: Product[]) {
    this.order_id = pedido_id;
    this.products = products;
  }
}