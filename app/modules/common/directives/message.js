'use strict';
module.exports = function () {
    var directiveDefinitionObject = {
        restrict: 'E',
        template: require('../templates/message.html'),
        replace: true,
        scope: false,
        controller: function controllerConstructor($scope,$element, $timeout){
            var timeoutPromise;

            $scope.closeAlert = function(index){
                $timeout.cancel(timeoutPromise);
                $scope.resetMessage();
            };
            $scope.resetMessage = function(){
                $scope.message = {
                    showMessage : false,
                    messages : [],
                    type : ''
                };
            };
            $scope.$watch('message.messages', function(value) {
                if (value.length) {
                    $scope.message.showMessage = true;
                    timeoutPromise = $timeout(function() {
                        $scope.resetMessage();
                    }, 3000);
                } else {
                    $scope.message.showMessage = false;
                }
            });
       
        }

    }
    return directiveDefinitionObject;
};



