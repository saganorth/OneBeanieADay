

export default function Herocomponent() {
    const hero = document.createElement("section");
    hero.innerHTML = `
        <div class="bg-blue-500 text-white p-8 text-center">
            <h1 class="text-4xl font-bold mb-4">Discover Unique Items at Sagas Webshop!</h1>
            <p class="text-lg">Your one-stop shop for exclusive products.</p>
        </div>
    `;
    hero.image = "src/assets/hero-image.jpg";

    return hero;
}