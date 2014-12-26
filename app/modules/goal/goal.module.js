'use strict';

var Goal = angular.module('app.goal', ['ui.router'])
.controller('GoalsController',  require('./controllers/goals'))
.config(require('./router/router'));

module.exports = Goal;