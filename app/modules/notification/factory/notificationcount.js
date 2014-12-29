'use strict';
module.exports = function() {

    var notification = {
        count: 0
    };
    notification.setData = function(data) {
        notification.count = angular.copy(data);
    };
    notification.getData = function() {
        return notification.count;
    };
    return notification;

};
