'use strict';

angular.module('openbox', ['facebook'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

angular.module('openbox').config(['FacebookProvider', function(FacebookProvider){
        FacebookProvider.init('174230196091494');
   }]);
