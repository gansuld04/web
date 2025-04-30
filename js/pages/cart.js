// js/pages/home.js
export default class Cart extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
          <style>
        main {
          padding: 2rem;
        }
    
        .cart-container {

            margin: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 1.5rem;
            justify-items: center;
          }
    
        .cart-item {
          display: flex;
          gap: 1rem;
          background-color: #030303;
          border-radius: 12px;
          padding: 1rem;
          align-items: center;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        }
    
        .cart-item img {
          width: 100px;
          height: auto;
          border-radius: 10px;
        }
    
        .item-details {
          flex: 1;
        }
    
        .item-details h3 {
          margin: 0 0 0.3rem;
        }
    
        .remove-item {
          background-color: #e74c3c;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: background 0.3s ease;
        }
    
        .remove-item:hover {
          background-color: #c0392b;
        }
    
        .cart-summary {
          margin-top: 2rem;
          text-align: right;
        }
    
        .checkout-btn {
          background-color: #7ed6a8;
          color: #000;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
        }
    
        .checkout-btn:hover {
          background-color: #62c097;
        }
      </style>
        <main>
            <h2>Таны сагсалсан бараа</h2>
            <div class="cart-container">
                <div class="cart-item">
                    <img src="img/nike-air-max.jpg" alt="Nike Air Max" />
                    <div class="item-details">
                    <h3>Nike Air Max</h3>
                    <p>₮250,000</p>
                    <p>Хэмжээ: 41</p>
                    <button class="remove-item">Устгах</button>
                </div>
            </div>
        </main>
      `;
    }
  }
  
  customElements.define('cart-page', Cart);
  