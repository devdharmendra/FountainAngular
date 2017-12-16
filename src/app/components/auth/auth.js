module.exports = {
  template: require('./auth.html'),
  controller: authController,
  bindings: {
    authStatus: '='
  }
};

function authController(authService) {
  this.authService = authService;
}

authController.prototype = {
  handleLogin: function () {
    let _that = this;
    this.authService.authenticateUser(this.user, function (err, response) {
      if (err) {
        _that.message = 'Something went wrong in user authentication';
        return;
      }
      if (response) {
        _that.message = 'User Authenticated successfully';
        _that.authStatus = true;
        _that.authService.setUserData(response);
        localStorage.setItem('userToken', 'someRandomToken');
        return;
      }
      _that.message = 'User not Authenticated successfully';
    });
  }
};
