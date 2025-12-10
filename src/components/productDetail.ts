import type Product from '../models/productIteam';


export default function ProductDetail (product: Product | null): HTMLElement {
  const root = document.createElement('div');
  root.className = 'product-detail-container';

  if (!product) {
    root.textContent = 'Product not found.';
    return root;
  }

  // Image section
  const imageSection = document.createElement('div');
  imageSection.className = 'product-detail-image-section';
  
  const imageContainer = document.createElement('div');
  imageContainer.className = 'product-detail-image';
  
  const img = document.createElement('img');
  const imageUrl = (product as any).images?.[0] || '';
  img.src = imageUrl;
  img.alt = (product as any).name || 'Product';
  
  imageContainer.appendChild(img);
  imageSection.appendChild(imageContainer);
  root.appendChild(imageSection);

  // Info section
  const infoSection = document.createElement('div');
  infoSection.className = 'product-detail-info-section';

  const title = document.createElement('h1');
  title.className = 'product-detail-title';
  title.textContent = product.name;
  infoSection.appendChild(title);

  const description = document.createElement('p');
  description.className = 'product-detail-description';
  description.textContent = (product as any).description || '';
  infoSection.appendChild(description);

  const price = document.createElement('div');
  price.className = 'product-detail-price';
  price.textContent = `${(product as any).price.toFixed(2)} kr`;
  infoSection.appendChild(price);

  const button = document.createElement('button');
  button.className = 'product-detail-add-to-cart-button';
  button.textContent = 'Add to Cart';
  button.addEventListener('click', () => {
    alert(`${product.name} added to cart!`);
  });
  infoSection.appendChild(button);

  root.appendChild(infoSection);
  return root; 
}

export function renderProductDetailById(container: HTMLElement, id: string, products: Product[] = []): void {
  const product = products.find((p: Product) => String(p.id) === id) || null;
  container.innerHTML = '';
  container.appendChild(ProductDetail(product));
}

