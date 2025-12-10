import Cart from '../components/cart';
import type Product from '../models/productIteam';

export default function cartPage(products: Product[] = []) {
  return Cart(products);
}
