module.exports = {
  template: require('./auth.html'),
  controller: authController
};

function authController() {
  this.text = 'My brand new component!';
}
