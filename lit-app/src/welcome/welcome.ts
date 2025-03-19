import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('welcome-page')
export class WelcomePage extends LitElement {

    static styles = [
        css`

        .container-home {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            gap: 1rem;
        }    
        `
    ];

    @property() name = 'Lit App';
    @property() usename = 'Lit UserName';
    @property() password = 'Lit Password';


    render() {
        return html`
            <section class="container-home">
            <h1>Welcome to ${this.name}</h1>
            <p>Username: ${this.usename}</p>
            <p>Password: ${this.password}</p>
            <button @click=${this.signout}>Sign Out</button>
            </section>       
        `;
    }


    signout() {
        this.dispatchEvent(new CustomEvent('signout', {
            detail: {
                token: ''
            }
        }));
    }
}