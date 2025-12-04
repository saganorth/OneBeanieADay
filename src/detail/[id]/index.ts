





function productDetail(id: string | null): HTMLElement {
    const el = document.createElement('div');
    el.textContent = id ? `Product ${id}` : 'Product details not available';
    return el;
}

export default function prdocutIdPage(): HTMLElement {
    const container = document.createElement('div');
    container.appendChild(productDetail(null));
    return container;
}