'use strict';
module.exports = function($scope, $http, $state,loggedInUser) {

    var util = require('../../../util/util'),
    lang = require('../../../lang/lang');
    $scope.goals = [];
   $scope.$on('$viewContentLoaded', function(){
       $scope.loading = true;
          $http({
            url: util.api.goal, 
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
   $scope.$on('userdataloaded', function() {
        console.log("userdata",loggedInUser)
    });
};


