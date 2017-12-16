var angular = require('angular');

var todos = require('./app/todos/todos');
var App = require('./app/containers/App');
var Auth = require('./app/components/auth/auth');
var Header = require('./app/components/Header');
var MainSection = require('./app/components/MainSection');
var TodoTextInput = require('./app/components/TodoTextInput');
var TodoItem = require('./app/components/TodoItem');
var Footer = require('./app/components/Footer');
require('angular-ui-router');
var routesConfig = require('./routes');

import './index.css';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('todoService', todos.TodoService)
  .component('app', App)
  .component('auth', Auth)
  .component('headerComponent', Header)
  .component('footerComponent', Footer)
  .component('mainSection', MainSection)
  .component('todoTextInput', TodoTextInput)
  .component('todoItem', TodoItem);
