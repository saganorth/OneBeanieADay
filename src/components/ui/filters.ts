import { createFilterSelect } from "./FilterSelect";


export function createSizeFilter(): HTMLElement {
  return createFilterSelect("Size", "size-filter", "All Sizes", [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
    { value: "one-size", label: "One Size" }
  ]);
}

export function createColorFilter(): HTMLElement {
  return createFilterSelect("Color", "color-filter", "All Colors", [
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "pink", label: "Pink" },
    { value: "orange", label: "Orange" },
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "multicolor", label: "Multicolor" },
    { value: "gray", label: "Gray" },
  ]);
}

export function createStyleFilter(): HTMLElement {
  return createFilterSelect("Style", "style-filter", "All Styles", [
    { value: "scrappy", label: "Scrappy" },
    { value: "simple", label: "Simple" },
    { value: "casual", label: "Casual" },

  ]);
}

export function createMaterialFilter(): HTMLElement {
  return createFilterSelect("Material", "material-filter", "All Materials", [
    { value: "cotton", label: "Cotton" },
    { value: "wool", label: "Wool" },
    { value: "acrylic", label: "Acrylic" },
    { value: "mix", label: "Mix" },
  ]);
}