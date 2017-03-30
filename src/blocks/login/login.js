const template = window.fest['src/blocks/login/login'];

export default class Login {
  constructor(node) {
    this.node = node;
    this.render();
    //this.template = document.querySelector('.template-login');
  }
  render () {
    this.node.innerHTML = template ({
      texts: (
        login: 'Login',
        password: 'Password'
      )
    });
  }
}
