module.exports = {
  template: require('./App.html'),
  controller: App
};

function App() {
  this.userLoggedIn = false;
  this.checkAuth();
}

App.prototype = {
  checkAuth: function () {
    this.authToken = localStorage.getItem('userToken');
    this.userLoggedIn = this.authToken === 'someRandomToken';
  }
};
