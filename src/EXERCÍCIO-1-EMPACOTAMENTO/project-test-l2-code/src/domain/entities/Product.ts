import { Dimensions } from "./Dimensions"

export class Product {
    product_id: string
    dimensions: Dimensions


    constructor(product_id: string, dimensions: Dimensions) {
    this.product_id = product_id;
    this.dimensions = dimensions;
  }
}