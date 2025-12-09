import FormComponent from "./form";
import PopUpComponent from "./popup";


export default function CheckOutComponent(): HTMLElement {
    const root = document.createElement('div');
    root.className = 'checkout-component';
    
    const formElem = FormComponent();
    root.appendChild(formElem);

    const paymentInfo = document.createElement('div');
    paymentInfo.className = 'payment-info';
    paymentInfo.innerHTML = `
        <h2>Payment Information</h2>
        <p>Please choose your payment method:</p>
        <button type="button" id="cardButton">Card</button>
        <button type="button" id="klarnaButton">Klarna</button>
        <button type="button" id="swishButton">Swish</button>
    `;

    const cardButton = paymentInfo.querySelector('#cardButton') as HTMLButtonElement;
    const klarnaButton = paymentInfo.querySelector('#klarnaButton') as HTMLButtonElement;
    const swishButton = paymentInfo.querySelector('#swishButton') as HTMLButtonElement;
    
    function highlightButton(selectedButton: HTMLButtonElement) {
        [cardButton, klarnaButton, swishButton].forEach(btn => {
            btn.style.border = btn === selectedButton ? '2px solid #007bff' : 'none';
        });
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
    checkoutButton.className = 'finalize-checkout-button';
    checkoutButton.textContent = 'Complete Purchase';
root.appendChild(checkoutButton);

const { showPopup } = PopUpComponent();
checkoutButton.addEventListener('click', () => {
    showPopup('Thanks for your order!', 2000);
});

return root;

}