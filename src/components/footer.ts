import "./footer.scss";
export default function Footer() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="footer-content">
            <p>&copy; 2025 Sagas Webshop. All rights reserved.</p>
        </div>
    `;
    return footer;
}
