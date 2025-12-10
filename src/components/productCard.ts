import type Product from '../models/productIteam';
import { addToCart } from '../context/cartContext';

export default function productCard(
  product: Product,
  handleAddToCart: (p: Product) => void,
  showPopup: (msg: string) => void
): HTMLElement {
  const card = document.createElement('div');
  card.className = 'product-card';

  // Product image container with link
  const imageContainer = document.createElement('div');
  imageContainer.className = 'product-image';
  
  const link = document.createElement('a');
  link.href = `/detail/${(product as any).id}`;
  
  const img = document.createElement('img');
  const imageUrl = (product as any).images?.[0] || '';
  img.src = imageUrl;
  img.alt = (product as any).name || 'Product';
  
  link.appendChild(img);
  imageContainer.appendChild(link);
  card.appendChild(imageContainer);


  const info = document.createElement('div');
  info.className = 'product-info';

  const title = document.createElement('h3');
  title.textContent = (product as any).name || '';
  info.appendChild(title);

  const price = document.createElement('div');
  price.className = 'price';
  price.textContent = `${(product as any).price.toFixed(2)}kr`;
  info.appendChild(price);

  card.appendChild(info);

  const btn = document.createElement('button');
  btn.textContent = 'Add to Cart';
  btn.className = 'add-to-cart-btn';
  btn.addEventListener('click', () => {
    try {
      addToCart({ id: (product as any).id, quantity: 1, name: (product as any).name, price: (product as any).price });
    } catch {}
    if (typeof handleAddToCart === 'function') {
      try { handleAddToCart(product as any); } catch {}
    }
    showPopup(`${(product as any).name} added to cart`);
  });

  card.appendChild(btn);

  return card;
}

