import { Injectable } from "@nestjs/common";
import { Dimensions } from "src/domain/entities/Dimensions";
import { Product } from "src/domain/entities/Product";
import { Order } from "src/domain/entities/Order";
import { Box } from "src/domain/entities/Box";

@Injectable()
export class OrdersService
{
    private listBoxsAvaible: { box_id: string ; dimentions: Dimensions}[] = [
    { box_id: 'Caixa 1', dimentions: { height: 30, width: 40, length: 80 } },
    { box_id: 'Caixa 2', dimentions: { height: 50 , width: 50 , length: 40 } },
    { box_id: 'Caixa 3', dimentions: { height: 40, width: 40, length: 60 } },
  ];


   processOrders(orders: Order[]) {
    return {
      pedidos: orders.map(order => ({
        pedido_id: order.order_id,
        caixas: this.assignBoxes(order.products),
      })),
    };
  }


  private assignBoxes(products: Product[]): Box[] {
    const boxes: Box[] = [];
    const usedBoxes = new Set<string>();

    for (const product of products) {
      let placed = false;

      for (const box of this.listBoxsAvaible) {
        if (this.fits(product.dimensions, box.dimentions) && !usedBoxes.has(box.box_id)) {
          boxes.push({ box_id: box.box_id, products: [product.product_id] });
          usedBoxes.add(box.box_id);
          placed = true;
          break;
        }
      }

      if (!placed) {
        
        boxes.push({
          box_id: null,
          products: [product.product_id],
          observation: 'Produto não cabe em nenhuma caixa disponível.',
        });
      }
    }   

    return boxes;
  }

  private fits(prod: Dimensions, box: Dimensions): boolean {
    return prod.height <= box.height && prod.width <= box.width && prod.length <= box.length;
  }
}