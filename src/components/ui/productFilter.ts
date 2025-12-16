import type { Products } from '../../models/productIteam';
import type { FilterOptions } from '../../models/filterInter';
import { createSizeFilter, createColorFilter, createStyleFilter, createMaterialFilter } from './filters';

export function filterProducts(products: Products[], filters: FilterOptions): Products[] {
  return products.filter(product => {
    if (filters.size && product.size !== filters.size) return false;
    if (filters.colors && filters.colors.length > 0 && !product.colors?.some(color => filters.colors?.includes(color))) return false;
  if (filters.style && filters.style.length > 0) {
      const ps = (product as any).style as string | string[] | undefined;
      const match = Array.isArray(ps)
        ? ps.some(s => filters.style!.includes(s))
        : ps ? filters.style!.includes(ps) : false;
      if (!match) return false;
    }
    if (filters.material && product.material !== filters.material) return false;
    if (filters.search && !product.name?.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });
}

export function createProductFilter(onFilterChange: (filters: FilterOptions) => void): HTMLElement {
  const filterContainer = document.createElement('div');
  filterContainer.className = 'product-filters';
  const searchGroup = document.createElement('div');
  searchGroup.className = 'filter-group search-group';
  const searchLabel = document.createElement('label');
  searchLabel.className = 'filter-label';
  searchLabel.textContent = 'Search:';
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.className = 'search-input';
  searchInput.placeholder = 'Search products...';
  searchGroup.appendChild(searchLabel);
  searchGroup.appendChild(searchInput);
  const sizeFilter = createSizeFilter();
  const colorFilter = createColorFilter();
  const styleFilter = createStyleFilter();
  const materialFilter = createMaterialFilter();
  const clearBtn = document.createElement('button');
  clearBtn.className = 'clear-filters-btn';
  clearBtn.textContent = 'Clear Filters';
  filterContainer.appendChild(searchGroup);
  filterContainer.appendChild(sizeFilter);
  filterContainer.appendChild(colorFilter);
  filterContainer.appendChild(styleFilter);
  filterContainer.appendChild(materialFilter);
  filterContainer.appendChild(clearBtn);
  const getFilters = (): FilterOptions => {
    const styleValue = (styleFilter.querySelector('select') as HTMLSelectElement)?.value;
    return {
      search: searchInput.value,
      size: (sizeFilter.querySelector('select') as HTMLSelectElement)?.value || undefined,
      colors: (colorFilter.querySelector('select') as HTMLSelectElement)?.value ? [(colorFilter.querySelector('select') as HTMLSelectElement)?.value] : undefined,
      style: styleValue ? [styleValue] : undefined,
      material: (materialFilter.querySelector('select') as HTMLSelectElement)?.value || undefined,
    };
  };

  const handleChange = () => onFilterChange(getFilters());

  searchInput.addEventListener('input', handleChange);
  sizeFilter.querySelector('select')?.addEventListener('change', handleChange);
  colorFilter.querySelector('select')?.addEventListener('change', handleChange);
  styleFilter.querySelector('select')?.addEventListener('change', handleChange);
  materialFilter.querySelector('select')?.addEventListener('change', handleChange);

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    (sizeFilter.querySelector('select') as HTMLSelectElement).value = '';
    (colorFilter.querySelector('select') as HTMLSelectElement).value = '';
    (styleFilter.querySelector('select') as HTMLSelectElement).value = '';
    (materialFilter.querySelector('select') as HTMLSelectElement).value = '';
    handleChange();
  });

  return filterContainer;
}