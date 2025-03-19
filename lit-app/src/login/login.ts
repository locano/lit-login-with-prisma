import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@conectate/ct-button';
import '@material/web/textfield/outlined-text-field.js';
@customElement('login-page')
export class LoginPage extends LitElement {

    static styles = [
        css`
        .container-login {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background: linear-gradient(135deg, #001F3F, #3A6D8C);
            font-family: 'Arial', sans-serif;
        }

        .login-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
            background: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            gap: 1rem;
            width: 50%;
            height: 50%;
        }

        h1 {
            font-size: 2rem;
            color: #001F3F;
        }

        md-outlined-text-field {
            width: 80%;
            --md-outlined-text-field-container-color: #EAD8B1;
            --md-outlined-text-field-border-color: #6A9AB0;
            --md-outlined-text-field-focused-border-color: #001F3F;
        }

        ct-button {
            width: 80%;
            background-color: #001F3F;
            color: #fff;
            font-size: 1rem;
            font-weight: bold;
            border-radius: 5px;
        }

        ct-button[disabled] {
            background-color: #6A9AB0;
        }
        `
    ];

    @property() title = 'Login Page';
    @property() usename = '';
    @property() password = '';

    render() {
        return html`
            <section class="container-login">
                <div class="login-card">
                    <h1>${this.title}</h1>

                    <md-outlined-text-field label="Enter your email" value=${this.usename} @input=${this.updateName}></md-outlined-text-field>
                    <md-outlined-text-field label="Enter your password" value=${this.password} type="password" @input=${this.updatePassword}></md-outlined-text-field>

                    <ct-button raised @click=${this.signin} ?disabled=${!this.usename || !this.password}>Sign In</ct-button>
                </div>
            </section>
        `;
    }

    updateName(event: Event) {
        const input = event.target as HTMLInputElement;
        this.usename = input.value;
    }

    updatePassword(event: Event) {
        const input = event.target as HTMLInputElement;
        this.password = input.value;
    }

    signin() {
        try {
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.usename,
                    password: this.password
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    localStorage.setItem('token', data.token);
                    this.dispatchEvent(new CustomEvent('signin', {
                        detail: {
                            token: data.token
                        }
                    }));
                });
        } catch (error) {
            console.log(error);
        }
    }
}
