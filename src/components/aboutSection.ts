

export default function aboutSection() {
    const about = document.createElement("section");
    about.className = "about-section";
    about.innerHTML = `
        <h2>About Sagas Webshop</h2>
        <p>Sagas Webshop is your go-to destination for unique and exclusive items. We pride ourselves on offering a curated selection of products that you won't find anywhere else. Our mission is to provide exceptional quality and service to our customers.</p>
    `;
    return about;
}