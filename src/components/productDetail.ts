import { Product } from '../models/product';
import productImg from './productImg';


Export default function ProductDetail (product: Product | null): HTMLElement {
   const root = document.createElement('div');
   root.className = 'product-detail';
 
  if (!product) {
   root.textContent = 'Product not found.';
    return root;
  }
   const title = document.createElement('h1');
    title.className = 'product-detail-title';
    title.textContent = product.namn;
    root.appendChild(title);
    root.appendChild(productImg(product, '/public'));

    const description = document.createElement('p');
    description.className = 'product-detail-description';
    description.textContent = product.beskrivning;
    root.appendChild(description);
    return root; 
}



