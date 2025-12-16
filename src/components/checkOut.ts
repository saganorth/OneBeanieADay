import FormComponent from "./form";
import PopUpComponent from "./popup";

export default function CheckOutComponent(): HTMLElement {
    const root = document.createElement('div');
    root.className = 'checkout-component';
    
    const title = document.createElement('h1');
    title.textContent = 'Checkout';
    root.appendChild(title);
    
    const formElem = FormComponent();
    root.appendChild(formElem);

    const paymentInfo = document.createElement('div');
    paymentInfo.className = 'payment-info';
    paymentInfo.innerHTML = `
        <h2>Payment Method</h2>
        <p>Select how you'd like to pay:</p>
        <button type="button" id="cardButton">
            <i class="fa fa-credit-card"></i> Credit/Debit Card
        </button>
        <button type="button" id="klarnaButton">
            <i class="fa fa-shopping-bag"></i> Klarna
        </button>
        <button type="button" id="swishButton">
            <i class="fa fa-mobile"></i> Swish
        </button>
    `;

    const cardButton = paymentInfo.querySelector('#cardButton') as HTMLButtonElement;
    const klarnaButton = paymentInfo.querySelector('#klarnaButton') as HTMLButtonElement;
    const swishButton = paymentInfo.querySelector('#swishButton') as HTMLButtonElement;
    
    let selectedPayment: HTMLButtonElement | null = null;
    
    function highlightButton(selectedButton: HTMLButtonElement) {
        [cardButton, klarnaButton, swishButton].forEach(btn => {
            btn.classList.remove('selected');
        });
        selectedButton.classList.add('selected');
        selectedPayment = selectedButton;
    }

    cardButton.addEventListener('click', () => {
        highlightButton(cardButton);
    });
    
    klarnaButton.addEventListener('click', () => {
        highlightButton(klarnaButton);
    });
    
    swishButton.addEventListener('click', () => {
        highlightButton(swishButton);
    });


    root.appendChild(paymentInfo);

    const checkoutButton = document.createElement('button');
    checkoutButton.type = 'button'; 
    checkoutButton.className = 'finalize-checkout-button';
    checkoutButton.textContent = 'Place Order';
    root.appendChild(checkoutButton);


    const { showPopup } = PopUpComponent();
    checkoutButton.addEventListener('click', () => {
        if (!selectedPayment) {
            showPopup('Please select a payment method', 2000);
            return;
        }
        setTimeout(() => {
            window.location.href = '/thank-you';
        }, 1000);
    });
    return root;

}