import type Product from '../models/productIteam';
export default function productImg(product: Product ): HTMLElement {
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
    img.src = firstImage;
    img.alt = (product as any).name ?? "";
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.display = "block";
    img.style.objectFit = "cover";

    a.appendChild(img);
    container.appendChild(a);
    return container;
}

