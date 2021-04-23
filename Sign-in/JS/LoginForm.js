const $template = document.createElement('template');
$template.innerHTML = `
    <form class="login-form">
        <h2 class="title">Log In</h2>
        <div class="sub-title">Login to your account</div>
        <input-wrapper class="email" placeholder="Your email" type="email" error=""></input-wrapper>
        <input-wrapper class="password" placeholder="Your password" type="password" error=""></input-wrapper>
        <button class="login-btn">Log In</button>
    </form>
`;

export default class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$loginForm = this.querySelector('.login-form');

        this.$email = this.querySelector('.email');
        this.$password = this.querySelector('.password');

    }

    connectedCallback() {
        this.$loginForm.onsubmit = (event) => {
            event.preventDefault();
            console.log("Log In form submitted");

            let isPassed = this.$email.validate((value) => {
                    return value != '';
                }, "Invalid email") &

                this.$password.validate((value) => {
                    return value != '';
                }, "Invalid password")


            let data = {

                email: this.$email.value,
                password: this.$password.value
            };

            if (isPassed) {
                console.log("ok");
            }

        }
    }
}

window.customElements.define('login-form', LoginForm);