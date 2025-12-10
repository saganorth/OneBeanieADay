import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/ui/header";
import homePage from "./home/index";
import shopPage from "./shop/index";
import cartPage from "./cart/index";
import checkoutPage from "./checkout/index";
import products from "./data/products";
import Footer from "./components/ui/footer";
import { renderProductDetailById } from "./components/productDetail";


const app = document.getElementById('app');

if (!app) {
  console.error('Root element "#app" not found');
  throw new Error('Root element "#app" not found');
}


document.body.insertBefore(Header(), app);

const pathname = window.location.pathname || '/';
const detailMatch = pathname.match(/^\/detail\/(.+)$/);

function handleAddToCart(productId: string) {
  console.log('add-to-cart', productId);
}

if (pathname === '/checkout') {
  app.appendChild(checkoutPage());
} else if (pathname === '/cart') {
  app.appendChild(cartPage(products as any));
} else if (detailMatch) {
  renderProductDetailById(app, detailMatch[1], products as any);
} else if (pathname.startsWith('/shop')) {
  app.appendChild(shopPage(products as any, handleAddToCart));
} else {
  app.appendChild(homePage());
}
document.body.appendChild(Footer());