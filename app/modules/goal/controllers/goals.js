'use strict';
module.exports = [
    '$scope', '$http', '$state', '$rootScope', 'loggedInUser', 'appData',
    function($scope, $http, $state, $rootScope, loggedInUser, appData) {

        var util = require('../../../util/util'),
        lang = require('../../../lang/lang');
        $scope.goals = [];
        $scope.$on('$viewContentLoaded', function(){
            $scope.$on('userdataloaded', function() {
                appData.setData('goal');
                $rootScope.$broadcast('menucontentloaded');
                $scope.userData = loggedInUser.getData();
                $scope.loading = true;
                $http({
                    url: util.api.goal, 
                    params : {
                      "id" : $scope.userData.id  
                    },
                    method: "GET"
                })
                .success(function(response){
                    $scope.loading = false;
                    if(response.success){
                        $scope.goals = response.goals;
                    }else{
                        toastr.error(lang.errorMsg.defaultError, 'Error!');
                    }
                })
                .error(function(error){
                    $scope.loading = false;
                    toastr.error(lang.errorMsg.networkError, 'Error!');
                });
            });
       
        });
  
    }];


