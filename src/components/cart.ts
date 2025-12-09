import { getCart, removeFromCart, getTotal, onChange } from '../context/cartContext';
import productImg from './productImg';

export default function Cart() {
  const container = document.createElement('div');
  container.className = 'cart-container';

  function renderCart() {
    container.innerHTML = '';
    const cartItems = getCart();
    const total = getTotal();

    if (cartItems.length === 0) {
      const emptyMsg = document.createElement('p');
      emptyMsg.textContent = 'Your cart is empty.';
      container.appendChild(emptyMsg);
      return;
    }

    const itemsList = document.createElement('ul');
    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.className = 'cart-item';

    li.innerHTML = `
      <img src="${item.productImg}" alt="${item.name}" width="64" height="64">
      <div>
        <strong>${item.name}</strong>
        <div>${item.price} kr × ${item.quantity}</div>
      </div>
      <div>${(item.price * item.quantity).toFixed(2)} kr</div>
      <div class="quantity-controls">
        <button class="qty-btn minus" aria-label="Decrease quantity">−</button>
        <span class="qty-display">${item.quantity}</span>
        <button class="qty-btn plus" aria-label="Increase quantity">+</button>
      </div>
    `;

    const minusBtn = li.querySelector('.qty-btn.minus') as HTMLButtonElement;
    const plusBtn = li.querySelector('.qty-btn.plus') as HTMLButtonElement;
    
    minusBtn.addEventListener('click', () => {
      if (item.quantity > 1) {
        item.quantity--;
        renderCart();
      }
    });
    
    plusBtn.addEventListener('click', () => {
      item.quantity++;
      renderCart();
    });

      const removeBtn = document.createElement('button');
    removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
    removeBtn.setAttribute('aria-label', 'Remove item');
      removeBtn.addEventListener('click', () => {
        removeFromCart(item.id);
      });
      li.appendChild(removeBtn);

      itemsList.appendChild(li);
    });
    container.appendChild(itemsList);

    const totalDiv = document.createElement('div');
    totalDiv.className = 'cart-total';
    totalDiv.innerHTML = `
      <div> Shipping: 59 kr</div>
      <div>Total: ${(total as number + 59).toFixed(2)} kr</div>
    `;
    container.appendChild(totalDiv);

    const checkoutBtn = document.createElement('button');
    checkoutBtn.textContent = 'Checkout';
    checkoutBtn.className = 'checkout-btn';
    checkoutBtn.addEventListener('click', () => {
      window.location.href = '/checkout';
    });
    container.appendChild(checkoutBtn);
  }

  renderCart();


  const unsubscribe = onChange(() => {
    renderCart();
  });

  const observer = new MutationObserver(() => {
    if (!document.body.contains(container)) {
      unsubscribe();
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  return container;
}