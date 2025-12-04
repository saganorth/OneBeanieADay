import type Product from '../models/productIteam';
import productImg from './productImg';

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

  // image component (includes hover price overlay)
  card.appendChild(productImg(product as any, assetBaseUrl));

  const price = document.createElement('div');
  price.className = 'product-price';
  price.textContent = formatPrice((product as any).price);
  card.appendChild(price);

  const btn = document.createElement('button');
  btn.textContent = 'Add to Cart';
  btn.className =
    'center bg-black bg-opacity-50 text-white opacity-100 transition-opacity duration-300 px-3 py-2 text-sm rounded';
  btn.style.fontFamily = "'Caveat', cursive";
  btn.addEventListener('click', () => {
    handleAddToCart(product as any);
    showPopup(`${(product as any).name} added to cart`);
  });

  card.appendChild(btn);
  cardWrap.appendChild(card);

  return cardWrap;
}

function formatPrice(price: number | undefined): string {
  if (price === undefined || price === null) return '';
  if (price > 1000) return `${Math.round(price / 100)} SEK`;
  return `${price} SEK`;
}
