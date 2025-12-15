import type { FilterOptions } from "../../models/filterInter";

function createSizeFilter(): HTMLElement {
  const filterDiv = document.createElement("div");
  filterDiv.className = "filter-group";
  filterDiv.innerHTML = `
    <label class="filter-label">Size:</label>
    <select class="size-filter">
      <option value="">All Sizes</option>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
      <option value="one-size">One Size</option>
    </select>
  `;
  return filterDiv;
}

function createStyleFilter(): HTMLElement {
  const filterDiv = document.createElement("div");
  filterDiv.className = "filter-group";
  filterDiv.innerHTML = `
    <label class="filter-label">Style:</label>
    <select class="style-filter">
      <option value="">All Styles</option>
      <option value="baret">Baret</option>
      <option value="bonnet">Bonnet</option>
      <option value="casual">Casual</option>
      <option value="scrappy">Scrappy</option>
      <option value="simple">Simple</option>
    </select>
  `;
  return filterDiv;
}

function createMaterialFilter(): HTMLElement {
  const filterDiv = document.createElement("div");
  filterDiv.className = "filter-group";
  filterDiv.innerHTML = `
    <label class="filter-label">Material:</label>
    <select class="material-filter">
      <option value="">All Materials</option>
      <option value="acrylic">Acrylic</option>
      <option value="cotton">Cotton</option>
      <option value="mix">Mix</option>
      <option value="Mix">Mix (uppercase)</option>
      <option value="polyseter">Polyester</option>
      <option value="wool">Wool</option>
    </select>
  `;
  return filterDiv;
}

export function createProductFilter(
  onFilterChange: (filters: FilterOptions) => void
): HTMLElement {
  const filterContainer = document.createElement("div");
  filterContainer.className = "product-filters";

  const activeFilters: FilterOptions = {};

  const searchField = document.createElement("div");
  searchField.className = "filter-group search-group";
  searchField.innerHTML = `
    <label class="filter-label">Search:</label>
    <input type="text" class="filter-input search-input" placeholder="Search beanies...">
  `;

  const sizeFilter = createSizeFilter();
  const styleFilter = createStyleFilter();
  const materialFilter = createMaterialFilter();


  const clearButton = document.createElement("button");
  clearButton.className = "clear-filters-btn";
  clearButton.textContent = "Clear Filters";
  clearButton.style.display = "none";

  
  const searchInput = searchField.querySelector(".search-input") as HTMLInputElement;
  const sizeSelect = sizeFilter.querySelector(".size-filter") as HTMLSelectElement;
  const styleSelect = styleFilter.querySelector(".style-filter") as HTMLSelectElement;
  const materialSelect = materialFilter.querySelector(".material-filter") as HTMLSelectElement;

  const updateFilters = () => {
    activeFilters.searchQuery = searchInput.value.trim() || undefined;
    activeFilters.size = sizeSelect.value || undefined;
    activeFilters.style = styleSelect.value ? [styleSelect.value] : undefined;
    activeFilters.material = materialSelect.value || undefined;
    
    const hasFilters = Object.values(activeFilters).some(v => v !== undefined);
    clearButton.style.display = hasFilters ? "block" : "none";

    onFilterChange(activeFilters);
  };

  searchInput.addEventListener("input", updateFilters);
  sizeSelect.addEventListener("change", updateFilters);
  styleSelect.addEventListener("change", updateFilters);
  materialSelect.addEventListener("change", updateFilters);
  
  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    sizeSelect.value = "";
    styleSelect.value = "";
    materialSelect.value = "";
    updateFilters();
  });

  filterContainer.appendChild(searchField);
  filterContainer.appendChild(sizeFilter);
  filterContainer.appendChild(styleFilter);
  filterContainer.appendChild(materialFilter);
  filterContainer.appendChild(clearButton);

  return filterContainer;
}


