import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './welcome/welcome';
import './login/login';

@customElement('lit-app')
export class LitApp extends LitElement {

    static styles = [
        css`
            :host {
                display: block;
            }

            .container {
                color: #fff;
                background-color: #333;
            }    
        `
    ];

    @property() title = 'Lit App';
    @property() token = '';




    render() {
        return html`
        <section class="container">
        ${this.token ? html`<welcome-page @signout=${this.handleSignout}></welcome-page>` : html`
           <login-page @signin=${this.handleSignIn}></login-page>
        `}
        </section>
        `;
    }


    handleSignIn(event: CustomEvent) {
        console.log('handleSignIn', event.detail.token);
        this.token = event.detail.token;
    }

    handleSignout(event: CustomEvent) {
        console.log('handleSignout', event.detail.token);
        this.token = event.detail.token;
    }
}
