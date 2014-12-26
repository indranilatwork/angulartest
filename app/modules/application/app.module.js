'use strict';

var userModule = require('../user/user.module'),
  goalModule = require('../goal/goal.module');

var App = angular.module('app', ['ui.router', 'app.user', 'app.goal'])
.factory('appData',require('./factory/appdata'));

module.exports = App;
