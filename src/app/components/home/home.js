module.exports = {
  template: require('./home.html'),
  controller: homeController,
  bindings: {
    authStatus: '='
  }
};

function homeController() {
}

