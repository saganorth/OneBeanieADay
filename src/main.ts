import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/header";
import homePage from "./home/index";
import shopPage from "./shop/index";
import products from "./data/products";
import Footer from "./components/footer";

const app = document.getElementById("app");

if (app) {
        document.body.insertBefore(Header(), app);
        const pathname = window.location.pathname || '/';

        function handleAddToCart(productId: string) {
            // TODO: wire real cart logic; for now log to console
            // You can replace this with your cart module later
            // e.g., Cart.add({ id: productId, quantity: 1 })
            // For debugging:
            // eslint-disable-next-line no-console
            console.log('add-to-cart', productId);
        }

        if (pathname.startsWith('/shop')) {
            app.appendChild(shopPage(products as any, handleAddToCart));
        } else {
            app.appendChild(homePage());
        }
    document.body.appendChild(Footer());
}