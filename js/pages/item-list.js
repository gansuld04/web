// js/pages/home.js
export default class ItemList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.prod = {};
    }

    connectedCallback() {
        this.fetchData();
        this.render();
    }

    async fetchData() {
        const res = await fetch("../../data/sneaker.json")
        const pros = await res.json();
        for(let prod of pros) {
            if (prod.id === +this.params.id) {
                this.prod = prod;
                break;
            }
        }
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <product-card></product-card>
        `
    }
}

customElements.define('item-list', ItemList);
