angular.module('ui.bootstrapAddOns.collapse',['ui.bootstrap.transition'])

.directive('collapsableelement', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
      	name: '='
      },
      transclude: true,
      template: '<div class="collapse" collapse="isCollapse" ng-transclude></div>',
      link: function(scope, element, attrs) {
        scope.name = {
          toggleState: function() {
  	        scope.isCollapse = !scope.isCollapse;
  	      }, showExpanded: function(show) {
  	        scope.isCollapse = !!show;
  	      }
  	    };
        scope.name.showExpanded(true);
      }
    };
  });