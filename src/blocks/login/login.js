(function(doc) {

  class Login {
    constructor(node) {
      this.node = node;
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
      const form = this.template.cloneNode(true);
      form.classList.toggle('template');
      this.node.appendChild(form);
    }
  }

  window.Login = Login;

})(document);
