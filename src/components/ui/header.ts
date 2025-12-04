import "@fortawesome/fontawesome-free/css/all.css";
import "./header.scss";
import { getCount, onChange } from '../../context/cartContext';

export default function Header() {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
        <nav class="site-nav">
            <ul class="nav-list">
            <li class="nav-item"><a href="/" class="nav-link">One Beanie a day </a></li>
                <li class="nav-item"><a href="/shop" class="nav-link">Shop</a></li>
                <li class="nav-item">
                    <a href="/cart" class="nav-link cart-link" aria-label="View cart">
                        <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                        <span class="sr-only">Cart</span>
                        <span class="cart-count">0</span>
                    </a>
                </li>
            </ul>
        </nav>
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