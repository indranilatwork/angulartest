'use strict';

var Notification = angular.module('app.notification', [])
.factory('notificationCount', require('./factory/notificationcount'))
.directive('notifications', require('./directives/notification'));

module.exports = Notification;