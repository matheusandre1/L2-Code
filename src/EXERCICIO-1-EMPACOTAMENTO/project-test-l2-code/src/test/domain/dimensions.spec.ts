import { Dimensions } from "../../domain/entities/Dimensions";

describe('Dimensions', () => {
  let dimensions: Dimensions;
  const height = 10;
  const width = 20;
  const length = 30;

  beforeEach(() => {    
    dimensions = new Dimensions(height, width, length);
  });

  it('should create an instance of Dimensions', () => {
    expect(dimensions).toBeInstanceOf(Dimensions);
  });

  it('should correctly assign height', () => {
    expect(dimensions.height).toBe(height);
  });

  it('should correctly assign width', () => {
    expect(dimensions.width).toBe(width);
  });

  it('should correctly assign length', () => {
    expect(dimensions.length).toBe(length);
  });
});