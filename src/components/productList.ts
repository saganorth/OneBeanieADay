import type { ProductListProps } from '../models/productIteam';
import PopUpComponent from './popup';
import productCard from './productCard';

export default function ProductList({
  products,
  handleAddToCart,
  assetBaseUrl = '',
}: ProductListProps): HTMLElement {
  const grid = document.createElement('div');
  grid.className = 'products-grid';

  const { showPopup } = PopUpComponent();

  products.forEach((product: ProductListProps['products'][number]) => {
    const cardElem = productCard(product as any, handleAddToCart as any, showPopup as any, assetBaseUrl);
    grid.appendChild(cardElem);
  });

  return grid;
}
    

