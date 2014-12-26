'use strict';
module.exports = [
    '$scope', 
    '$http', 
    '$state',
    function($scope, $http, $state) {

    var util = require('../../../util/util'),
    lang = require('../../../lang/lang'),
    loginForm;

    $scope.$on('$viewContentLoaded', function(){
        var validationConfig =    {
            rules: {
                password:{
                    required : true
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                password: {
                    required : lang.validationMessages.password
                },
                email: {
                    required: lang.validationMessages.email,
                    email: lang.validationMessages.emailValid
                }
            }
        };
        loginForm = $('[name="login_form"]');
        util.validateForm(loginForm,validationConfig);
    });
    $scope.loginCredentials = {
        email: 'sandip.saha@innofied.com',
        password: 'sandip'
    };
   
    $scope.doSignIn = function(){
        var isValid= loginForm.valid();
        if(!isValid){
            return ;
        }
         $scope.loading = true;
        $http({
            url: util.api.login, 
            method: "GET",
            params: {
                email: $scope.loginCredentials.email,
                password : $scope.loginCredentials.password
            }
        })
        .success(function(response){
             $scope.loading = false;
            if(response.success){
               window.localStorage.setItem('incubatize-user-data', response.id);
               $state.go('user.goals',{
                   id:response.id
               }); 
            } else{
                $scope.message = {
                    messages : [lang.errorMsg.authenticationError],
                    type : 'danger'
                }; 
               
            }
        })
        .error(function(error){
             $scope.loading = false;
             $scope.message = {
                    messages : [lang.errorMsg.networkError],
                    type : 'danger'
                }; 
        });
    }
}];
