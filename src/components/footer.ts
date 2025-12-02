export default function Footer() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2024 Sagas Webshop. All rights reserved.</p>
        </div>
    `;
    return footer;
}