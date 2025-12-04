import type Product from '../models/productIteam';

export default function productImg(product: Product, assetBaseUrl = ""): HTMLElement {
    const container = document.createElement("div");
    container.className = "product-image-container";
    container.style.position = "relative";
    container.style.display = "block";
    container.style.overflow = "hidden";

    const a = document.createElement("a");
    a.href = `/product/${product.id}`;
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

    // Price overlay
    const overlay = document.createElement("div");
    overlay.className = "price-overlay";
    overlay.style.position = "absolute";
    overlay.style.left = "0";
    overlay.style.right = "0";
    overlay.style.bottom = "0";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.padding = "0.5rem";
    overlay.style.background = "rgba(0,0,0,0.6)";
    overlay.style.color = "white";
    overlay.style.fontWeight = "600";
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 180ms ease";

    const priceText = document.createElement("span");
    priceText.textContent = formatPrice((product as any).price);
    overlay.appendChild(priceText);

    a.appendChild(img);
    container.appendChild(a);
    container.appendChild(overlay);

    // Hover handlers to show overlay
    container.addEventListener("mouseenter", () => {
        overlay.style.opacity = "1";
    });
    container.addEventListener("mouseleave", () => {
        overlay.style.opacity = "0";
    });

    return container;
}

function formatPrice(price: number | undefined): string {
    if (!price && price !== 0) return "";
    // Heuristic: if price looks like cents (>1000), divide by 100
    if (price > 1000) return `${Math.round(price / 100)} SEK`;
    return `${price} SEK`;
}