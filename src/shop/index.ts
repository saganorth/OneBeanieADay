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


    const productListContainer = document.createElement('div');
    productListContainer.className = 'product-list-wrapper';

    const initialProductList = ProductList({
        products: products as any,
        handleAddToCart: addByProduct as any,
        assetBaseUrl: '/public',
    });
    productListContainer.appendChild(initialProductList);


    const filterComponent = createProductFilter((filters: FilterOptions) => {
        const filteredProducts = filterProducts(products, filters);
        productListContainer.innerHTML = '';
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