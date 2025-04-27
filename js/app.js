import "./pages/home.js";
import "./pages/item.js";
import "./components/product-card.js";
import "./components/navbar.js";
import "./router-link.js"
import { Router } from "./router.js";

const app = document.getElementById("app");
const router = new Router([
    {
        path: "/",
        component: "home-page",
    },
    {
        path: "/item/:id",
        component: "item-page"
    }
], app);

