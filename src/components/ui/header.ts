import "@fortawesome/fontawesome-free/css/all.css";
import "../../style/header.scss";
import { getCount, onChange } from '../../context/cartContext';

export default function Header() {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
        <div class="header-container">
            <div class="header-title">
                <a href="/" class="site-title">ONE BEANIE A DAY</a>
            </div>
            <a href="/cart" class="cart-icon-link" aria-label="View cart">
                <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                <span class="cart-count">0</span>
            </a>
        </div>
    `;


    const countEl = header.querySelector('.cart-count');
    if (countEl) countEl.textContent = String(getCount());
    const removed = onChange(() => {
      if (countEl) countEl.textContent = String(getCount());
    });

    const observer = new MutationObserver(() => {
      if (!document.body.contains(header)) {
        try { removed(); } catch {}
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return header;
}