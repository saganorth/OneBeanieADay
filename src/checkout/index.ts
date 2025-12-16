import CheckOutComponent from "../components/checkOut";


export default function checkoutPage(): HTMLElement {
    const container = document.createElement('div');
    container.className = 'checkout-page-container';

    const backLink = document.createElement('a');
    backLink.href = '/cart';
    backLink.className = 'checkout-back-link';
    backLink.innerHTML = '<i class="fas fa-arrow-left"></i> Back to cart';
    container.appendChild(backLink);

    const checkoutComponent = CheckOutComponent();
    container.appendChild(checkoutComponent);
    
    return container;
}