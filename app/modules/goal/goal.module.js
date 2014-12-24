'use strict';

var util = require('../../util/util'),

Goal = angular.module('app.goal', ['ui.router', 'ui.bootstrap'])
.controller('GoalsController',  require('./controllers/goals'))
.config(require('./router/router'));

module.exports = Goal;