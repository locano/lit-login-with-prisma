import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-app')
export class LitApp extends LitElement {



    @property() title = 'Lit App';

    render() {
        return html`
            <h1>${this.title}</h1>
        `;
    }
}
