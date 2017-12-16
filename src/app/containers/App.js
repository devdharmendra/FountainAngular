module.exports = {
  template: require('./App.html'),
  controller: App
};

function App() {
  this.userLoggedIn = false;
}
