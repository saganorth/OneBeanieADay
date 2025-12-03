import aboutSection from "../components/aboutSection";
import Herocomponent from "../components/hero";

export default function homePage() {
    const container = document.createElement("div");
    container.innerHTML = `<h1 class='home-text'>Welcome to Sagas Webshop!</h1>
<p class='home-sub'>Browse our collection of unique items.</p>`;
    container.appendChild(Herocomponent());
    container.appendChild(aboutSection());
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'shop now';
    button.addEventListener('click', () => { window.location.href = '/shop'; });
    container.appendChild(button);
    return container;
}

