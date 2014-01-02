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
  $routeProvider.when('/horses', {templateUrl: 'partials/horsesList.html', controller: 'MyCtrl2'});
  $routeProvider.when('/owners', {templateUrl: 'partials/ownersList.html', controller: 'MyCtrl2'});
  $routeProvider.when('/owners/:id', {templateUrl: 'partials/ownerDetails.html', controller: 'MyCtrl2'});
  $routeProvider.when('/owners/:id/edit', {templateUrl: 'partials/ownerEdit.html', controller: 'MyCtrl2'});
  
  $routeProvider.when('/', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/view3', {templateUrl: 'partials/partial3.html', controller: 'MyCtrl2'});
  $routeProvider.when('/bigExamples', {templateUrl: 'partials/bigExample.html'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);


angular.module('plunker', ['ui.bootstrap']);
function CollapseDemoCtrl($scope) {
  $scope.isCollapsed = false;
}

function AccordionDemoCtrl($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
}

function DropdownCtrl($scope) {
  $scope.items = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
}
function TypeaheadCtrl($scope) {

  $scope.selected = undefined;
  $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
}