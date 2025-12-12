import type { Products } from '../models/productIteam';
import ProductList from '../components/productList';
import { createProductFilter } from '../components/ui/createFilter';
import { filterProducts } from '../components/ui/productFilter';
import type { FilterOptions } from '../models/filterInter';
import '../style/productFilter.scss';

export default function shopPage(
    products: Products[],
    handleAddToCart: (productId: string) => void
): HTMLElement {
    const container = document.createElement('div');
    container.className = 'shop-container';

    const addByProduct = (product: Products) => {
        if (product && product.id) {
            handleAddToCart(product.id);
        }
    };

    // Container for product list (will be replaced on filter)
    const productListContainer = document.createElement('div');
    productListContainer.className = 'product-list-wrapper';

    // Create initial product list
    const initialProductList = ProductList({
        products: products as any,
        handleAddToCart: addByProduct as any,
        assetBaseUrl: '/public',
    });
    productListContainer.appendChild(initialProductList);

    // Create filter component
    const filterComponent = createProductFilter((filters: FilterOptions) => {
        const filteredProducts = filterProducts(products, filters);
        
        // Clear container
        productListContainer.innerHTML = '';

        // Create and append new filtered product list
        const newProductList = ProductList({
            products: filteredProducts as any,
            handleAddToCart: addByProduct as any,
            assetBaseUrl: '/public',
        });
        productListContainer.appendChild(newProductList);
    });

    container.appendChild(filterComponent);
    container.appendChild(productListContainer);
    return container;
}