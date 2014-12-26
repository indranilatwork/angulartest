'use strict';
module.exports = ['appData', function (appData) {
    var directiveDefinitionObject = {
        restrict: 'E',
        template: require('../templates/mobilemenu.html'),
        replace: true,
        scope: false,
         controller : function($scope){
            $scope.$on('menucontentloaded', function() {
                $scope.selectedMenu = appData.getData();
            });
        }
    }
    return directiveDefinitionObject;
}];


