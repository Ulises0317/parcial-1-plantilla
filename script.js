class OscarsCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.setAttribute('class', 'oscars-card');

        const title = document.createElement('h3');
        title.textContent = this.getAttribute('titulo');

        const description = document.createElement('p');
        description.textContent = this.getAttribute('descripcion');

        const button = document.createElement('button');
        button.textContent = 'Más información';
        button.addEventListener('click', () => {
            alert('Pronto más detalles sobre los Oscar 2025');
        });

        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(button);
        shadow.appendChild(container);
    }
}

customElements.define('oscars-card', OscarsCard);

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('La página ha cargado completamente');
    
});