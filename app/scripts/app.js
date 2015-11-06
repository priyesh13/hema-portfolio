'use strict';

angular
  .module('hemaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutController'
      })
      .when('/client', {
        templateUrl: 'views/client.html',
        controller: 'clientController'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
