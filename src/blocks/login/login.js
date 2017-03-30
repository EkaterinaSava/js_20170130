const template = window.fest[src/blocks/login/login];

export default class Login {
  constructor(node) {
    this.node = node;
    this.render();
    this.template = document.querySelector('.template-login');
  }
  render () {
    /* 1. вариант: собздать шаблон через JS
    const form = document.createElement('form');
    const login = document.createElement('input');
    const password = document.createElement('input');

    login.type = 'text';
    password.type = 'password';

    form.appendChild(login);
    form.appendChild(password);
    this.node.appendChild(form);
    */
    /* 2.
    const form = this.template.cloneNode(true);
    form.classList.toggle('template');
    this.node.appendChild(form);
    */
    this.node.innerHTML = template ({
      texts: (
        login: 'Login',
        password: 'Password'
      )
    });
  }
}

window.Login = Login;
