var util = require('../../../util/util');
module.exports = function($stateProvider, $injector, $urlRouterProvider) {
    $stateProvider
    .state('signin', {
        url: '/signin',
        template: require('../templates/signin.html'),
             resolve:{
            checkLogin: function ($q,$stateParams) {
                var d = $q.defer();
                if (util.checkLogin()) {
                    d.reject("login");
                } else {
                    d.resolve();
                }

                return d.promise;
            }
        },
        controller: 'LoginController'
    })
    .state('user', {
        url: '/user/:id',
        template: require('../templates/user.html'),
        resolve:{
            checkLogin: function ($q,$stateParams) {
                var d = $q.defer();
                if (!util.checkLogin($stateParams.id)) {
                    d.reject("notLogin");
                } else {
                    d.resolve();
                }

                return d.promise;
            }
        },
        controller: 'UserController'
    })

    $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get('$state');
        if (window.localStorage.getItem('incubatize-user-data')) {
            $state.go('user.goals',{
                id : window.localStorage.getItem('incubatize-user-data')
            });
        } else {
            $state.go('signin');
        }
    });
     
}

