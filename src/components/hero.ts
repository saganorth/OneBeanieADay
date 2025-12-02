

export default function Herocomponent() {
    const hero = document.createElement("section");
    const img = document.createElement("img");
    hero.innerHTML = `
        <div class="hero-content">
            <h1 class="hero-title">Discover Unique Items at Sagas Webshop!</h1>
            <p class="hero-subtitle">Your one-stop shop for exclusive products.</p>
        </div>
    `;
    img.src = "src/assets/hero-image.jpg";
    img.alt = "Hero image";
    img.className = "hero-image";
    hero.appendChild(img);

    return hero;
}