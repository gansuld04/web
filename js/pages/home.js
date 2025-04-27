// js/pages/home.js
export default class HomePage extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.prod = [];
    }
  
    connectedCallback() {
      this.fetchData();
      this.render();
    }

    async fetchData() {
      const res = await fetch("../../data/sneaker.json")
      this.prod = await res.json();
      this.render();
    }
  
    render() {
      let recProds = ""
      let newProds = ""


      for(let prod of this.prod) {
        if (prod.type == "recommended")
          recProds += `<product-card id="${prod.id}" name="${prod.name}" price="${prod.price}" img="${prod.image}"></product-card>`
        else if (prod.type == "new")
          newProds += `<product-card id="${prod.id}" name="${prod.name}" price="${prod.price}" img="${prod.image}"></product-card>`
      }
      this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="css/style.css">
    <header class="nike-header">
        <video autoplay loop muted playsinline class="nike-video">
            <source src="video/header video.mp4" type="video/mp4">
            Таны браузер видеог дэмжихгүй байна.
        </video>
        <div class="nike-overlay">
            <h2>Just Do It.</h2>
            <button class="buy-now">Захиалах</button>
        </div>
    </header>

    <main>
        <section class="product-section">
            <h2>Санал болгож буй бүтээгдэхүүн</h2>
            <div class="product-grid" id="recommended">
            ${recProds}
            </div>
          </section>

        <section class="product-section">
            <h2>Шинэ бүтээгдэхүүн</h2>
            <div class="product-grid">
              ${newProds}
            </div>
          </section>

        <section class="product-section">
            <h2>Их зарагдсан бүтээгдэхүүн</h2>
            <div class="product-grid">
              <div class="product-card">
                <a href="item.html">
                    <img src="img/nike-air-max.jpg" alt="Nike Air Max">
                    <h3>Nike Air Max</h3>
                    <p>₮250,000</p>
                </a>
              </div>
              <div class="product-card">
                <a href="item.html">
                    <img src="img/adidas ultra-boost.jpg" alt="Adidas UltraBoost">
                    <h3>Adidas UltraBoost</h3>
                    <p>₮270,000</p>
                </a>
              </div>
              <div class="product-card">
                <a href="item.html">
                    <img src="img/converse-all-star.jpg" alt="Converse All Star">
                    <h3>Converse All Star</h3>
                    <p>₮190,000</p>
                </a>
              </div>
              <div class="product-card">
                <a href="">
                    <img src="img/lining-shadow.jpg" alt="Li-Ning Shadow">
                    <h3>Li-Ning Shadow</h3>
                    <p>₮230,000</p>
                </a>
              </div>
              <div class="product-card">
                <a href="item.html">              
                    <img src="img/anta-kt8.jpeg" alt="ANTA KT8">
                    <h3>ANTA KT8</h3>
                    <p>₮260,000</p>
                </a>
              </div>
            </div>
          </section>
    </main>
      `;
    }
  }
  
  customElements.define('home-page', HomePage);
  