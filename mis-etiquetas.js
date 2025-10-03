class Banner extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<header class="header-logo">
  <img src="WhatsApp_Image_2025-09-27_at_18.32.38-removebg-preview.png" 
       class="logo" 
       alt="logo" 
       title="Logo cafetería Florista">
</header>

`
    }
}
window.customElements.define('mi-banner', Banner);

class Pie extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `<footer class="indexfondo">
        <p> &copy; 2025 - Cafetería - Bar Florista</p>  <p>Información de redes sociales </p>  
        </footer> 
        `
    }
}
window.customElements.define('mi-pie', Pie);

