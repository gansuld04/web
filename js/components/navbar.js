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
      <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #575757;
            color: #f4f4f4;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        ul {
            list-style: none;
        }

        p {
            margin: 0.75rem 0;
        }

        /* Primary Text */
        .primary-text {
        display: flex;
        flex-direction:row;
            color: green;
        }

        /* Navbar */
        #navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #333;
            color: #fff;
            padding: 1rem;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        /* Logo */
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            display: flex;
            align-items: center;
        }

        /* Search Form */
        #search-form {
            display: flex;
            align-items: center;
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;
            margin: 0 1rem;
            width: 500px;
        }

        #search-form input {
            border: none;
            padding: 0.5rem;
            outline: none;
            font-size: 1rem;
            width: 160px;
            flex: 1;
        }

        #search-form button {
            background-color: green;
            color: #fff;
            border: none;
            padding: 0.6rem 0.75rem;
            cursor: pointer;
            flex-shrink: 0;
            border-radius: 8px;
        }


        #search-form button:hover {
            background-color: darkgreen;
        }

        /* Navigation Menu */
        .nav-menu {
            display: flex;
            align-items: center;
        }

        .nav-menu > li {
            position: relative;
            margin-left: 1rem;
        }

        .nav-menu li a {
            color: #fff;
            padding: 0.75rem;
            display: block;
            transition: background 0.3s ease;
        }

        .nav-menu li a:hover {
            background: green;
            border-radius: 5px;
        }

        /* Dropdown */
        .dropdown-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #444;
            min-width: 150px;
            z-index: 1000;
            border-radius: 5px;
        }

        .dropdown:hover .dropdown-menu {
            display: block;
        }

        .dropdown-menu li a {
            padding: 0.5rem 1rem;
            color: white;
        }

        .sub-dropdown {
            position: relative;
        }

        .sub-menu {
            display: none;
            position: absolute;
            top: 0;
            left: 100%;
            background-color: #555;
            min-width: 150px;
            border-radius: 5px;
        }

        .sub-dropdown:hover .sub-menu {
            display: block;
        }
      </style>
      <nav id="navbar">
        <router-link to="/">
            <h1 class="logo">
  <span class="primary-text">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24" height="24" fill="currentColor" style="margin-right: 5px;">
      <path d="M416 0C352.3 0 256 32 256 32V160c48 0 76 16 104 32s56 32 104 32c56.4 0 176-16 176-96S512 0 416 0zM128 96c0 35.3 28.7 64 64 64h32V32H192c-35.3 0-64 28.7-64 64zM288 512c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32V480s96.3 32 160 32zM0 416c0 35.3 28.7 64 64 64H96V352H64c-35.3 0-64 28.7-64 64z"/>
    </svg>G
  </span>sneaker
</h1>

        </router-link>
        <form id="search-form">
            <input type="text" placeholder="Хайх..." />
            <button type="none"><i>🔍</i></button>
        </form>

        <ul>
          <li>
          <div class="nav-menu-link">
            <div class="router-link">
               <router-link to="cart">
               <i>🛒</i>
              <span class="cart-count">2</span>
            </router-link>
            </div>
            </div>
          </li>
        </ul>

        <ul class="nav-menu">
            <li class="dropdown">
            <div class="nav-menu-link">
                <router-link to="#">Brands <i">⬇️</i></router-link>
                    <ul class="dropdown-menu">
                        <li class="sub-dropdown">
                            <router-link to="#">NIKE <i>⬇️</i></router-link>
                            <ul class="sub-menu">
                                <li><router-link to="item-list.html">Дотор</router-link></li>
                                <li><router-link to="item-list.html">Гадаа</router-link></li>
                                <li><router-link to="item-list.html">Өдөр тутам</router-link></li>
                                <li><router-link to="item-list.html">Сагс</router-link></li>
                            </ul>
                        </li>
                        <div>
                    <li class="sub-dropdown">
                        <router-link to="#">ADIDAS <i>⬇️</i></router-link>
                        <ul class="sub-menu">
                            <li><router-link to="item-list">Дотор</router-link></li>
                            <li><router-link to="item-list.html">Гадаа</router-link></li>
                            <li><router-link to="item-list.html">Өдөр тутам</router-link></li>
                            <li><router-link to="item-list.html">Сагс</router-link></li>
                        </ul>
                    </li>
                    <li class="sub-dropdown">
                        <router-link to="#">ANTA <i>⬇️</i></router-link>
                        <ul class="sub-menu">
                            <li><router-link to="item-list.html">Дотор</router-link></li>
                            <li><router-link to="item-list.html">Гадаа</router-link></li>
                            <li><router-link to="item-list.html">Өдөр тутам</router-link></li>
                            <li><router-link to="item-list.html">Сагс</router-link></li>
                        </ul>
                    </li>
                    <li class="sub-dropdown">
                        <router-link to="#">LI-NING <i>⬇️</i></router-link>
                        <ul class="sub-menu">
                            <li><router-link to="item-list.html">Дотор</router-link></li>
                            <li><router-link to="item-list.html">Гадаа</router-link></li>
                            <li><router-link to="item-list.html">Өдөр тутам</router-link></li>
                            <li><router-link to="item-list.html">Сагс</router-link></li>
                        </ul>
                    </li>
                    <li class="sub-dropdown">
                        <router-link to="#">CONVERSE <i>⬇️</i></router-link>
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
            <li><router-link to="login">Нэвтрэх</router-link></li>
        </ul>        
    </nav>`;
    }
  }
  
  customElements.define('nav-bar', NavBar);
  


