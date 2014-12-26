'use strict';

var util = require('../../util/util'),
  userModule = require('../user/user.module'),
  goalModule = require('../goal/goal.module');

var App = angular.module('app', ['ui.router', 'ui.bootstrap', 'app.user', 'app.goal'])
.factory('appData',require('./factory/appdata'));

module.exports = App;
