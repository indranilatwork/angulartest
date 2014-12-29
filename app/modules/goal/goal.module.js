'use strict';
var notificationModule = require('../notification/notification.module'),

  Goal = angular.module('app.goal', ['ui.router', 'app.notification'])
  .controller('GoalsController', require('./controllers/goals'))
  .config(require('./router/router'));

module.exports = Goal;
