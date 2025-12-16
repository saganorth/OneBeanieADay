import { clearCart } from '../context/cartContext';

export default function ThankYouPage(): HTMLElement {
    const container = document.createElement('div');
    container.className = 'thank-you-container';
    container.innerHTML = `
        <div class="thank-you-content">
            <div class="thank-you-icon">✓</div>
            <h1>Thank You for Your Order!</h1>
            <p class="thank-you-message">We appreciate your purchase and will process your order right away.</p>
            
            <div class="order-confirmation">
                <p>An order confirmation has been sent to your email.</p>
                <p>You can track your order status in your account.</p>
            </div>
            
            <div class="next-steps">
                <h2>What's Next?</h2>
                <ul>
                    <li>Check your email for order confirmation</li>
                    <li>Track your shipment when it's dispatched</li>
                    <li>Contact us if you have any questions</li>
                </ul>
            </div>
            
            <button id="continueShoppingBtn" class="btn-continue-shopping">Continue Shopping</button>
        </div>
    `;
    
    clearCart();
    
    const continueBtn = container.querySelector('#continueShoppingBtn');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            window.location.href = '/';
        });
    }
    
    return container;
}