import { CartRow } from './cart-row';
import { book1 } from "./book.spec";

fdescribe('CartRow', () => {
  it('should compute row amount', () => {
    const cartRow1 = new CartRow(book1,1);
    expect(cartRow1.amount()).toBeCloseTo(123.1,2)
  });

    
});
