'use strict';

var util = require('../../util/util'),

Common = angular.module('app.common', ['ui.bootstrap'])
.directive('message',require('./directives/message'))
.directive('mobilemenu',require('./directives/mobilemenu'))
.directive('tabmenu',require('./directives/tabmenu'))
.directive('desktopmenu',require('./directives/desktopmenu'));

module.exports = Common;