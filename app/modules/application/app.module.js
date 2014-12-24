'use strict';

var util = require('../../util/util'),
  userModule = require('../user/user.module'),
  goalModule = require('../goal/goal.module');

var App = angular.module('app', ['ui.router', 'ui.bootstrap', 'app.user', 'app.goal']);

module.exports = App;
