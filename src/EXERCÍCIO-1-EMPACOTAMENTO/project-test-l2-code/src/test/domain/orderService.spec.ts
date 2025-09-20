
import { OrdersService } from "../../services/OrderService";
import { Test, TestingModule } from '@nestjs/testing';
import { Product } from "../../domain/entities/Product";
import { Dimensions } from "../../domain/entities/Dimensions";

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersService],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('processOrders', () => {
    it('should assign products to appropriate boxes (sucesso)', () => {
      const orders = [
        {
          order_id: 1,
          products: [
            new Product('PS5', new Dimensions(10, 20, 30)),
            new Product('Joystick', new Dimensions(20, 20, 20)),
          ],
        },
      ];

      const result = service.processOrders(orders as any);

      expect(result.pedidos[0].pedido_id).toBe(1);
      expect(result.pedidos[0].caixas.length).toBe(2);

      
      result.pedidos[0].caixas.forEach((box: any) => {
        expect(box.box_id).not.toBeNull();
        expect(box.products.length).toBe(1);
      });
    });

    it('should handle products that do not fit in any box (falha)', () => {
      const orders = [
        {
          order_id: 2,
          products: [
            new Product('SuperTV', new Dimensions(100, 100, 100)), 
          ],
        },
      ];

      const result = service.processOrders(orders as any);

      expect(result.pedidos[0].pedido_id).toBe(2);
      expect(result.pedidos[0].caixas.length).toBe(1);

      const box = result.pedidos[0].caixas[0];
      expect(box.box_id).toBeNull();
      expect(box.products).toContain('SuperTV');
      expect(box.observation).toBe('Produto não cabe em nenhuma caixa disponível.');
    });

    it('should assign multiple products to different boxes without reusing the same box', () => {
      const orders = [
        {
          order_id: 3,
          products: [
            new Product('Produto1', new Dimensions(30, 40, 70)),
            new Product('Produto2', new Dimensions(50, 50, 40)),
            new Product('Produto3', new Dimensions(40, 40, 60)),
          ],
        },
      ];

      const result = service.processOrders(orders as any);

      const boxIds = result.pedidos[0].caixas.map((b: any) => b.box_id);
      
      expect(new Set(boxIds).size).toBe(boxIds.length);
    });
  });

  describe('fits', () => {
    it('should return true if product fits in box', () => {
      const prod = new Dimensions(10, 20, 30);
      const box = new Dimensions(20, 30, 40);

      expect(service['fits'](prod, box)).toBe(true);
    });

    it('should return false if product does not fit in box', () => {
      const prod = new Dimensions(50, 50, 50);
      const box = new Dimensions(20, 30, 40);

      
      expect(service['fits'](prod, box)).toBe(false);
    });
  });
});