import type Product from '../models/productIteam';
import ProductList from '../components/productList';

export default function shopPage(
    products: Product[],
    handleAddToCart: (productId: string) => void
): HTMLElement {
    const container = document.createElement('div');

    const addByProduct = (product: Product) => {
        if (product && (product as any).id) {
            handleAddToCart((product as any).id);
        }
    };

    const productListElem = ProductList({
        products: products as any,
        handleAddToCart: addByProduct as any,
        assetBaseUrl: '/public',
    });

    container.appendChild(productListElem);
    return container;
}