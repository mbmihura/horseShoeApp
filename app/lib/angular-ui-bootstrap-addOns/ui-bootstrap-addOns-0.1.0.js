angular.module('ui.bootstrapAddOns.collapse',['ui.bootstrap.transition'])

.directive('collapsableelement', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
      	name: '='
      },
      transclude: true,
      template: '<div class="collapse" collapse="isExpand" ng-transclude></div>',
      link: function(scope, element, attrs) {
        scope.name= {toggleState: function() {
	        scope.isExpand = !scope.isExpand;
	      }, showCollapsed: function(show) {
	        scope.isExpand = !!show;
	      }
	    };
      }
    };
  });