export default interface Product {
  imageUrl: string;
  id: string;
  category: string;
  name: string;
}

export type Products = {
  id: string;
  name: string;
  price: number; 
  description: string;
  images: string[];
  sku: string;
  stock: number;
  material?: string;
};


export interface ProductListProps {
  products: Product[];
  assetBaseUrl?: string;
  handleAddToCart: (product: Product) => void;
}