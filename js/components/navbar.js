export default class NavBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      console.log("HELLO FROM WEB COMPONENT")
    }
  
    render() {
      this.shadowRoot.innerHTML = `
      <head>
          <script src="https://kit.fontawesome.com/1a32fd64af.js" crossorigin="anonymous"></script>
      </head>
        <link rel="stylesheet" href="css/style.css">
      <nav id="navbar">
        <router-link to="/">
            <h1 class="logo">
                <span class="primary-text">
                    <i class="fas fa-shoe-prints" style="font-size: 24px;"></i>G
                </span>sneaker
            </h1>
        </router-link>
        <form id="search-form">
            <input type="text" placeholder="Хайх..." />
            <button type="submit"><i class="fas fa-search"></i></button>
        </form>

        <ul>
          <li>
            <router-link to="cart.html">
              <i class="fas fa-shopping-cart"></i>
              <span class="cart-count">2</span>
            </router-link>
          </li>
        </ul>

        <ul class="nav-menu">
            <li class="dropdown">
                <router-link to="#">Brands <i class="fas fa-angle-down"></i></router-link>
                <ul class="dropdown-menu">
                    <li class="sub-dropdown">
                        <router-link to="#">NIKE <i class="fas fa-angle-right"></i></router-link>
                        <ul class="sub-menu">
                            <li><router-link to="item-list.html">Дотор</router-link></li>
                            <li><router-link to="item-list.html">Гадаа</router-link></li>
                            <li><router-link to="item-list.html">Өдөр тутам</router-link></li>
                            <li><router-link to="item-list.html">Сагс</router-link></li>
                        </ul>
                    </li>
                    <li class="sub-dropdown">
                        <router-link to="#">ADIDAS <i class="fas fa-angle-right"></i></router-link>
                        <ul class="sub-menu">
                            <li><router-link to="item-list.html">Дотор</router-link></li>
                            <li><router-link to="item-list.html">Гадаа</router-link></li>
                            <li><router-link to="item-list.html">Өдөр тутам</router-link></li>
                            <li><router-link to="item-list.html">Сагс</router-link></li>
                        </ul>
                    </li>
                    <li class="sub-dropdown">
                        <router-link to="#">ANTA <i class="fas fa-angle-right"></i></router-link>
                        <ul class="sub-menu">
                            <li><router-link to="item-list.html">Дотор</router-link></li>
                            <li><router-link to="item-list.html">Гадаа</router-link></li>
                            <li><router-link to="item-list.html">Өдөр тутам</router-link></li>
                            <li><router-link to="item-list.html">Сагс</router-link></li>
                        </ul>
                    </li>
                    <li class="sub-dropdown">
                        <router-link to="#">LI-NING <i class="fas fa-angle-right"></i></router-link>
                        <ul class="sub-menu">
                            <li><router-link to="item-list.html">Дотор</router-link></li>
                            <li><router-link to="item-list.html">Гадаа</router-link></li>
                            <li><router-link to="item-list.html">Өдөр тутам</router-link></li>
                            <li><router-link to="item-list.html">Сагс</router-link></li>
                        </ul>
                    </li>
                    <li class="sub-dropdown">
                        <router-link to="#">CONVERSE <i class="fas fa-angle-right"></i></router-link>
                        <ul class="sub-menu">
                            <li><router-link to="item-list.html">Дотор</router-link></li>
                            <li><router-link to="item-list.html">Гадаа</router-link></li>
                            <li><router-link to="item-list.html">Өдөр тутам</router-link></li>
                            <li><router-link to="item-list.html">Сагс</router-link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><router-link to="#">About</router-link></li>
            <li><router-link to="login.html">Нэвтрэх</router-link></li>
        </ul>        
    </nav>`;
    }
  }
  
  customElements.define('nav-bar', NavBar);
  


