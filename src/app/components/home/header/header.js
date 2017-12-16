module.exports = {
  template: require('./header.html'),
  controller: headerController,
  bindings: {
    authStatus: '='
  }
};

function headerController(authService) {
  this.authService = authService;
}

headerController.prototype = {
  handleSignOut: function () {
    let _that = this;
    this.authService.logout(function (err) {
      if (err) {
        return;
      }
      _that.authStatus = false;
    });
  }
};
