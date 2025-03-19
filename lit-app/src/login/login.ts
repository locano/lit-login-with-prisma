import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('login-page')
export class LoginPage extends LitElement {

    static styles = [
        css`

        .container-login {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            gap: 1rem;
        }    
        `
    ];

    @property() title = 'Welcome';
    @property() usename = '';
    @property() password = '';




    render() {
        return html`
            <section class="container-login">
                <h1>Hello, ${this.title}</h1>
                <input type="text" placeholder="Enter your usename" @input=${this.updateName}>
                <input type="password" placeholder="Enter your password" @input=${this.updatePassword}>
                <button @click=${this.signin}
                ?disabled=${!this.usename || !this.password}
                >Sign In</button>
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
        // make a post request to the server and then save JWT
        //  El JWT debe almacenarse en el navegador y utilizarse para las solicitudes protegidas.
        console.log('Signin');
        try {
            // fetch('http://localhost:3000/api/auth/signin', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         usename: this.usename,
            //         password: this.password
            //     })
            // })
            //     .then(response => response.json())
            //     .then(data => {
            //         console.log(data);
            //         localStorage.setItem('token', data.token);
            //         this.dispatchEvent(new CustomEvent('signin', {
            //             detail: {
            //                 token: data.token
            //             }
            //         }));
            //     });
            this.dispatchEvent(new CustomEvent('signin', {
                detail: {
                    token: 'token'
                }
            }));

        } catch (error) {
            console.log(error);
        }
    }
}
