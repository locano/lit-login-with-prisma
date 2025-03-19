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
            background: linear-gradient(135deg, #001F3F, #3A6D8C);
            gap: 1rem;
        }

        .user-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
            background: #fff;;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            gap: 1rem;
            width: 50%;
            height: 50%;
        }

        .loader {
            width: 50px;
            --b: 8px;
            aspect-ratio: 1;
            border-radius: 50%;
            background: #fff;
            -webkit-mask:
                repeating-conic-gradient(#0000 0deg,#000 1deg 70deg,#0000 71deg 90deg),
                radial-gradient(farthest-side,#0000 calc(100% - var(--b) - 1px),#000 calc(100% - var(--b)));
            -webkit-mask-composite: destination-in;
                    mask-composite: intersect;
            animation: l5 1s infinite;
        }
        @keyframes l5 {to{transform: rotate(.5turn)}}
        `
    ];

    @property() name = 'Lit App';
    @property() usename = 'Lit UserName';
    @property() password = 'Lit Password';
    @property() laoding = true;

    connectedCallback() {
        super.connectedCallback();
        this.fetchUserData();
    }

    render() {
        return html`
            ${this.laoding ? html`<section class="container-home"><div class="loader"></div></section>` :
                html`<section class="container-home">
                    <div class="user-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="user" width="100" height="100">
                        <h1>Welcome back ${this.name}</h1>
                        <p>Username: ${this.usename}</p>
                        <p>Password: ${this.password}</p>
                        <button @click=${this.signout}>Sign Out</button>
                    </div>
                </section>`
            }
        `;
    }

    fetchUserData() {
        fetch('http://localhost:3000/perfil',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        )
            .then(response => response.json())
            .then(response => {
                let data = response.data;

                setTimeout(() => {
                    this.name = data.name;
                    this.usename = data.email;
                    this.password = data.password;
                    this.laoding = false;
                }, 1000);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    signout() {
        localStorage.setItem('token', '');
        this.dispatchEvent(new CustomEvent('signout', {
            detail: {
                token: ''
            }
        }));
    }
}