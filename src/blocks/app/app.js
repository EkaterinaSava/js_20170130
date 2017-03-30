import Login from '../login/login.js';
import Signin from '../signin/signin.js';

document.addEveniListener('DOMContentLoaded', () => {
  const login = new Login(document.querySelector('.js__login-view'));
  const signup = new Signup(document.querySelector('.js__signup-view'));
});
