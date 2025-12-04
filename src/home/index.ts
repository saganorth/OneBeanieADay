import aboutSection from "../components/aboutSection";
import Herocomponent from "../components/hero";

export default function homePage() {
    const container = document.createElement("div");
    container.innerHTML = `<h1 class='home-text'>Everyday Saga crochet one beanie til she made 10k!</h1>
<p class='home-sub'>donating 10% of sales to charity</p>`;
    container.appendChild(Herocomponent());
    container.appendChild(aboutSection());
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'see all beanies';
    button.addEventListener('click', () => { window.location.href = '/shop'; });
    container.appendChild(button);
    return container;
}

