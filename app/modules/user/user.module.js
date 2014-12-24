'use strict';

var util = require('../../util/util'),
commonModule = require('../common/common.module'),

User = angular.module('app.user', ['ui.router', 'ui.bootstrap','app.common'])
.factory('loggedInUser',require('./factory/userdata'))

.controller('LoginController', ['$scope', '$http', '$state', require('./controllers/signin')])

.controller('UserController', require('./controllers/user'))

.config(require('./router/router'))

.run(function($rootScope,$injector){
    var $state = $injector.get('$state');
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        if (error === "notLogin") {
            $state.go("signin");
        }else if(error === "login"){
            $state.go(fromState,fromParams); 
        }
    });
});

module.exports = User;