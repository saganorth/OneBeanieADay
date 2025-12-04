import productImg from './productImg';
import type Product from '../models/productIteam';


export default function ProductDetail (product: Product | null): HTMLElement {
  const root = document.createElement('div');
  root.className = 'product-detail';

  if (!product) {
    root.textContent = 'Product not found.';
    return root;
  }

  const title = document.createElement('h1');
  title.className = 'product-detail-title';
  title.textContent = product.name;
  root.appendChild(title);
  root.appendChild(productImg(product));

  const description = document.createElement('p');
  description.className = 'product-detail-description';
  description.textContent = (product as any).description || '';
  root.appendChild(description);

  const price = document.createElement('div');
    price.className = 'product-detail-price';
    price.textContent = `${(product as any).price.toFixed(2)} kr`;
    root.appendChild(price);

    const button = document.createElement('button');
    button.className = 'product-detail-add-to-cart-button';
    button.textContent = 'Add to Cart';
    button.addEventListener('click', () => {
        alert(`${product.name} added to cart!`);
        });
    root.appendChild(button);
  return root; 
}

export function renderProductDetailById(container: HTMLElement, id: string, products: Product[] = []): void {
  const product = products.find((p: Product) => String(p.id) === id) || null;
  container.innerHTML = '';
  container.appendChild(ProductDetail(product));
}

