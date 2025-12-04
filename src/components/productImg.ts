import type Product from '../models/productIteam';

export default function productImg(product: Product, assetBaseUrl = "/public"): HTMLElement {
    const container = document.createElement("div");
    container.className = "product-image-container";
    container.style.position = "relative";
    container.style.display = "block";
    container.style.overflow = "hidden";

    const a = document.createElement("a");
    a.href = `/detail/${product.id}`;
    a.className = "product-image-link";

    const img = document.createElement("img");
    const firstImage = (product as any).images && (product as any).images.length ? (product as any).images[0] : "";
    const leadingSlash = firstImage.startsWith("/") ? "" : "/";
    img.src = `${assetBaseUrl}${leadingSlash}${firstImage}`;
    img.alt = (product as any).name ?? "";
    img.width = 500;
    img.height = 300;
    img.className = "w-full mb-4 object-contain";
    (img.style as CSSStyleDeclaration).maxHeight = "300px";
    img.style.display = "block";


    a.appendChild(img);
    container.appendChild(a);
    return container;
}

