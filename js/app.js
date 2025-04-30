import "./pages/home.js";
import "./pages/item.js";
import "./components/product-card.js";
import "./components/navbar.js";
import "./router-link.js"
import { Router } from "./router.js";
import "./pages/login.js";
import "./pages/register.js";
import "./pages/cart.js"
import "./pages/item-list.js"
const app = document.getElementById("app");
const router = new Router([
    {
        path: "/",
        component: "home-page",
    },
    {
        path:"login",
        component: "login-page"
    },
    {
        path: "/item/:id",
        component: "item-page"
    },
    {
        path:"cart",
        component: "cart-page"
    },
    {
        path:"register",
        component: "register-page"
    },
    {
        path:"item-list",
        component: "item-list"
    }
], app);

