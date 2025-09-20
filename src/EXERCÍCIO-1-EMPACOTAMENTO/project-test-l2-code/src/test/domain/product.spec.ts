import { Dimensions } from '../../domain/entities/Dimensions';
import { Order } from '../../domain/entities/Order';
import { Product } from '../../domain/entities/Product';

describe('Order', () => {
  let order: Order;
  let products: Product[];  

  beforeEach(() => {
    
     products = [
      new Product('PS5', new Dimensions(10, 20, 30)),
      new Product('Joystick', new Dimensions(5, 5, 10))
    ];
    
    order = new Order(1, products);
  });

  it('should create an instance of Order', () => {
    expect(order).toBeInstanceOf(Order);
  });

  it('should correctly assign order_id', () => {
    expect(order.order_id).toBe(1);
  });

  it('should correctly assign products', () => {
    expect(order.products).toEqual(products);
  });

  it('should contain instances of Product in products array', () => {
    order.products.forEach(product => {
      expect(product).toBeInstanceOf(Product);
    });
  });

  it('should allow adding a new product', () => {
    const newProduct = new Product('Volante', new Dimensions(10, 20, 30));
    order.products.push(newProduct);

    expect(order.products).toContain(newProduct);
    expect(order.products.length).toBe(3);
  });
});
