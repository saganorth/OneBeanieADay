import type { Products } from '../models/productIteam';
import ProductList from '../components/productList';
import { filterProducts, createProductFilter } from '../components/ui/productFilter';
import type { FilterOptions } from '../models/filterInter';
import '../style/productFilter.scss';

export default function shopPage(
    products: Products[],
    handleAddToCart: (productId: string) => void
): HTMLElement {
    const container = document.createElement('div');
    container.className = 'shop-container';

    const addByProduct = (product: Products) => {
        if (product?.id) {
            handleAddToCart(product.id);
        }
    };

    const productListContainer = document.createElement('div');
    productListContainer.className = 'product-list-wrapper';

    const renderProducts = (productsToRender: Products[]) => {
        productListContainer.innerHTML = '';
        const productList = ProductList({
            products: productsToRender as any,
            handleAddToCart: addByProduct as any,
            assetBaseUrl: '/public',
        });
        productListContainer.appendChild(productList);
    };

    
    const filterComponent = createProductFilter((filters: FilterOptions) => {
        const filteredProducts = filterProducts(products, filters);
        renderProducts(filteredProducts);
    });

    
    renderProducts(products);


    container.appendChild(filterComponent);
    container.appendChild(productListContainer);
    
    return container;
}