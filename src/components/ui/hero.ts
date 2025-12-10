

export default function HeroComponent() {
    const hero = document.createElement("section");
    hero.className = "hero-section";
    const img = document.createElement("img");
    img.src = "/asset/yarnhero.png";
    img.alt = "Hero image";
    img.className = "hero-image";
    hero.appendChild(img);

    const overlay = document.createElement('div');
    overlay.className = 'hero-overlay';
    overlay.innerHTML = `
        <div class="hero-content">
            <h1>Every Beanie Tells a Story</h1>
            <p>Saga crochets one beanie at a time until she reaches 10k!</p>
            <p class="charity-text"> Donating 10% of sales to charity</p>
        </div>
    `;
    hero.appendChild(overlay);

    const button = document.createElement('button');
    button.className = 'hero-cta-button';
    button.type = 'button';
    button.textContent = 'See All Beanies';
    button.addEventListener('click', () => { window.location.href = '/shop'; });
    overlay.querySelector('.hero-content')?.appendChild(button);

    return hero;
}