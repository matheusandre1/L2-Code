import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from '../../controllers/OrdersController';
import { CreateOrdersDto } from 'src/domain/dtos/OrdersDto';
import { OrdersService } from 'src/services/OrderService';
import { JwtService } from '@nestjs/jwt';

describe('OrdersController', () => {
  let controller: OrdersController;
  let service: OrdersService;

  const mockOrdersService = {
    processOrders: jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn(),
    verify: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [
        {
          provide: OrdersService,
          useValue: mockOrdersService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
      ],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('processOrders', () => {
    const exampleOrders = {
      orders: [
        {
          order_id: 1,
          products: [
            { product_id: 'PS5', dimensions: { height: 40, width: 10, length: 25 } },
            { product_id: 'Volante', dimensions: { height: 40, width: 30, length: 30 } },
          ],
        },
        {
          order_id: 2,
          products: [
            { product_id: 'Joystick', dimensions: { height: 15, width: 20, length: 10 } },
            { product_id: 'Fifa 24', dimensions: { height: 10, width: 30, length: 10 } },
          ],
        },
      ],
    };

    it('should call OrdersService.processOrders and return processed orders (sucesso)', async () => {
      const mockResponse = {
        pedidos: [
          { pedido_id: 1, caixas: [{ box_id: 'Caixa 1', products: ['PS5'] }] },
          { pedido_id: 2, caixas: [{ box_id: 'Caixa 2', products: ['Joystick'] }] },
        ],
      };

      (service.processOrders as jest.Mock).mockReturnValue(mockResponse);

      const result = controller.processOrders(exampleOrders as CreateOrdersDto);

      expect(service.processOrders).toHaveBeenCalledWith(exampleOrders.orders);
      expect(result).toEqual(mockResponse);
    });

    it('should handle orders with products that do not fit in any box (falha)', async () => {
      const exampleOrdersFail = {
        orders: [
          {
            order_id: 3,
            products: [
              { product_id: 'Cadeira Gamer', dimensions: { height: 120, width: 60, length: 70 } },
            ],
          },
        ],
      };

      const mockResponseFail = {
        pedidos: [
          {
            pedido_id: 3,
            caixas: [
              {
                box_id: null,
                products: ['Cadeira Gamer'],
                observation: 'Produto não cabe em nenhuma caixa disponível.',
              },
            ],
          },
        ],
      };

      (service.processOrders as jest.Mock).mockReturnValue(mockResponseFail);

      const result = controller.processOrders(exampleOrdersFail as CreateOrdersDto);

      expect(service.processOrders).toHaveBeenCalledWith(exampleOrdersFail.orders);
      expect(result).toEqual(mockResponseFail);
    });

    it('should handle multiple orders with mixed scenarios', async () => {
      const mixedOrders = {
        orders: [
          {
            order_id: 4,
            products: [
              { product_id: 'Headset', dimensions: { height: 25, width: 15, length: 20 } },
              { product_id: 'Cadeira Gamer', dimensions: { height: 120, width: 60, length: 70 } },
            ],
          },
        ],
      };

      const mockMixedResponse = {
        pedidos: [
          {
            pedido_id: 4,
            caixas: [
              { box_id: 'Caixa 1', products: ['Headset'] },
              {
                box_id: null,
                products: ['Cadeira Gamer'],
                observation: 'Produto não cabe em nenhuma caixa disponível.',
              },
            ],
          },
        ],
      };

      (service.processOrders as jest.Mock).mockReturnValue(mockMixedResponse);

      const result = controller.processOrders(mixedOrders as CreateOrdersDto);

      expect(service.processOrders).toHaveBeenCalledWith(mixedOrders.orders);
      expect(result).toEqual(mockMixedResponse);
    });
  });
});
