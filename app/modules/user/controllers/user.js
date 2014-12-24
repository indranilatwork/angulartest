'use strict';
module.exports = [
'$scope', 
'$http', 
'$state',
'$rootScope',
'loggedInUser',
function($scope, $http, $state,$rootScope,loggedInUser) {

    var util = require('../../../util/util');
      $scope.$on('$viewContentLoaded', function(){
          console.log("in view content loaded");
          $http({
            url: util.api.user, 
            method: "GET"
        })
        .success(function(response){
           if(response.success){
               $scope.user = response;
               loggedInUser.data = response;
               console.log("data loaded",loggedInUser);
               $rootScope.$broadcast('userdataloaded');
           }else{
               toastr.error(lang.errorMsg.defaultError, 'Error!');
           }
        })
        .error(function(error){
             toastr.error(lang.errorMsg.networkError, 'Error!');
        });
   });
    $scope.doLogout = function(){
        window.localStorage.removeItem('incubatize-user-data');
        $state.go('signin');
    }
}];



