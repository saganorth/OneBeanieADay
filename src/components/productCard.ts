import type Product from '../models/productIteam';
import productImg from './productImg';
import { addToCart } from '../context/cartContext';

export default function productCard(
  product: Product,
  handleAddToCart: (p: Product) => void,
  showPopup: (msg: string) => void,
  assetBaseUrl = ''
): HTMLElement {
  const cardWrap = document.createElement('div');
  cardWrap.className = 'productcardwrap';

  const card = document.createElement('div');
  card.className = 'productcard';

  const title = document.createElement('h2');
  title.className = 'producttitle';
  title.textContent = (product as any).name || '';
  card.appendChild(title);


  card.appendChild(productImg(product as any, assetBaseUrl));

  const price = document.createElement('div');
  price.className = 'product-price';
  price.textContent = `$${(product as any).price.toFixed(2)}`;
  card.appendChild(price);

  const btn = document.createElement('button');
  btn.textContent = 'Add to Cart';
  btn.className =
    'add-to-cart-button';
  btn.addEventListener('click', () => {
    // Prefer calling the centralized cart store; also call optional handler passed by caller
    try {
      addToCart({ id: (product as any).id, quantity: 1, name: (product as any).name, price: (product as any).price });
    } catch {}
    if (typeof handleAddToCart === 'function') {
      try { handleAddToCart(product as any); } catch {}
    }
    showPopup(`${(product as any).name} added to cart`);
  });

  card.appendChild(btn);
  cardWrap.appendChild(card);

  return cardWrap;
}

