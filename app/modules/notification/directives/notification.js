'use strict';
var util = require('../../../util/util');

module.exports = function() {
  var notificationDirective = {
    restrict: 'E',
    template: require('../templates/notification.html'),
    replace: true,
    scope: false,
    controller: ['$scope', '$element', '$http', 'notificationCount' ,function controllerConstructor($scope, $element, $http, notificationCountFactory) {
      $scope.getNotifications = function() {
        $http.get(util.api.notification)
          .success(function(response) {
            $scope.notifications = response.data;
            notificationCountFactory.setData(response.data.length);
          }).error(function(err) {
            console.log('notification error: ', err);
          })
      };
    }]

  }
  return notificationDirective;
};
