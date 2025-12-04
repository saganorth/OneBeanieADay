import type { Products } from '../models/productIteam';
   
      export default function productImageComponent(product: Product, assetBaseUrl: string) {
       const a = document.createElement("a");
       a.href = `/product/${product.id}`;
       a.className = "product-image-link";
      const img = document.createElement("img");
       const firstImage = product.images && product.images.length ? product.images[0] : "";
       const leadingSlash = firstImage.startsWith("/") ? "" : "/";
       img.src = `${assetBaseUrl}${leadingSlash}${firstImage}`;
       img.alt = product.name ?? "";
       img.width = 500;
       img.height = 300;
       img.className = "w-full mb-4 object-contain";
       (img.style as CSSStyleDeclaration).maxHeight = "300px";
       a.appendChild(img);
       return a;
   }