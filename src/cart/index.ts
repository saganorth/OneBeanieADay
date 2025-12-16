import Cart from '../components/cart';
import type Product from '../models/productIteam';
import ThankYouPage from '../components/thank';

export default function cartPage(products: Product[] = []) {
  return Cart(products);
}

export function showThankYouPage() {
  const thankYouPage = ThankYouPage();
  document.body.innerHTML = '';
  document.body.appendChild(thankYouPage);
}