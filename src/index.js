var angular = require('angular');

var authService = require('./app/components/auth/auth.service');
var App = require('./app/containers/App');
var Auth = require('./app/components/auth/auth');
var header = require('./app/components/home/header/header');
var homeSection = require('./app/components/home/home');
var MainSection = require('./app/components/MainSection');
require('angular-ui-router');
var routesConfig = require('./routes');

import './index.css';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('authService', authService.AuthService)
  .component('app', App)
  .component('auth', Auth)
  .component('header', header)
  .component('homeSection', homeSection)
  .component('mainSection', MainSection);
