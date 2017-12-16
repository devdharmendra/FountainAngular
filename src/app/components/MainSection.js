
module.exports = {
  template: require('./MainSection.html'),
  controller: MainSection,
  bindings: {
    userLoggedIn: '='
  }
};

/** @ngInject */
function MainSection() {
}
