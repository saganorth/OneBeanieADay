import type { Products } from "../../models/productIteam";
import type { FilterOptions } from "../../models/filterInter";

export function filterProducts(products: Products[], filters: FilterOptions): Products[] {
  return products.filter(product => {
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchesSearch = 
        product.name.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query) ||
        product.material?.toLowerCase().includes(query) ||
        product.colors?.some(color => color.toLowerCase().includes(query)) ||
        product.style?.some(style => style.toLowerCase().includes(query));
      
      if (!matchesSearch) return false;
    }

    if (filters.size && product.size !== filters.size) {
      return false;
    }

    if (filters.colors && filters.colors.length > 0) {
      const hasColor = filters.colors.some(filterColor => 
        product.colors?.some(productColor => 
          productColor.toLowerCase().includes(filterColor.toLowerCase())
        )
      );
      if (!hasColor) return false;
    }

    if (filters.style && filters.style.length > 0) {
      const hasStyle = filters.style.some(filterStyle => 
        product.style?.some(productStyle => 
          productStyle.toLowerCase().includes(filterStyle.toLowerCase())
        )
      );
      if (!hasStyle) return false;
    }

    if (filters.material) {
      if (!product.material?.toLowerCase().includes(filters.material.toLowerCase())) {
        return false;
      }
    }

    return true;
  });
}
