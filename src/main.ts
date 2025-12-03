import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/header";
import homePage from "./home/index";
import Footer from "./components/footer";

const app = document.getElementById("app");

if (app) {
    document.body.insertBefore(Header(), app);
    app.appendChild(homePage());
    document.body.appendChild(Footer());
}