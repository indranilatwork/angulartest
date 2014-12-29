var util = require('../../../util/util');
module.exports = function($stateProvider, $injector, $urlRouterProvider) {
  $stateProvider
    .state('user.goals', {
      url: '/goals',
      views: {
        "middlePane": {
          template: require('../templates/goals.html'),
          resolve: {

            checkLogin: function($q, $stateParams) {
              var d = $q.defer();
              if (!util.checkLogin($stateParams.id)) {
                d.reject("notLogin");
              } else {
                d.resolve();
              }

              return d.promise;
            }
          },
          controller: 'GoalsController'
        },
        "rightPane": {
            template: "<notifications></notifications>"
        }
      }
    })
}
