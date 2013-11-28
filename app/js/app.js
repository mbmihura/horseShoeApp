'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.bootstrap',
  'ui.bootstrapAddOns.collapse'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stays', {templateUrl: 'partials/staysChart.html', controller: 'StayChartCtrl'});
  $routeProvider.when('/stays/edit', {templateUrl: 'partials/staysChartEdit.html', controller: 'StayEditCtrl'});
  $routeProvider.when('/charges', {templateUrl: 'partials/charges.html', controller: 'ChargesCtrl'});

  $routeProvider.when('/horses/', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/horses/new', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/horses/edit', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/stays/', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/stays/new', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/stays/edit', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'MyCtrl2'});


  $routeProvider.otherwise({redirectTo: '/'});
}]);
