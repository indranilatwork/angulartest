'use strict';

var util = require('../../util/util'),

Common = angular.module('app.common', ['ui.bootstrap'])
.directive('message',require('./directives/message'));

module.exports = Common;