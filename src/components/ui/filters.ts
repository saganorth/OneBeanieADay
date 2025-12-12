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
    { value: "purple", label: "Purple" },
    { value: "orange", label: "Orange" },
    { value: "brown", label: "Brown" },
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "multicolor", label: "Multicolor" },
    { value: "gray", label: "Gray" },
    { value: "teal", label: "Teal" },
    { value: "beige", label: "Beige" }
  ]);
}

export function createStyleFilter(): HTMLElement {
  return createFilterSelect("Style", "style-filter", "All Styles", [
    { value: "scrappy", label: "Scrappy" },
    { value: "simple", label: "Simple" },
    { value: "casual", label: "Casual" },
    { value: "minimalist", label: "Minimalist" },
    { value: "bohemian", label: "Bohemian" },
    { value: "classic", label: "Classic" },
    { value: "vintage", label: "Vintage" },
    { value: "modern", label: "Modern" }
  ]);
}

export function createMaterialFilter(): HTMLElement {
  return createFilterSelect("Material", "material-filter", "All Materials", [
    { value: "simple", label: "Simple" },
    { value: "scrappy", label: "Scrappy" },
    { value: "simple scrappy", label: "Simple & Scrappy" }
  ]);
}