angular.module('ui.bootstrapAddOns.collapse',['ui.bootstrap.transition'])

.directive('collapsableelement', function($document, $location) {
    var openElement;
    var closeActive = angular.noop;

    return {
      restrict: 'E',
      replace: true,
      scope: {
      	name: '='
      },
      transclude: true,
      template: '<div class="collapse" collapse="isCollapse" ng-transclude></div>',
      link: function(scope, element, attrs) {
        // TODO: Offer posibility to config if element should automatically collapse when clicking out side or in other comtroller.
        //var documentCliclHandler =  function (event) {
        //    closeActive(event)
        //    scope.$digest();
        //  };

        scope.name = {
          collapse: function(event) {closeActive(event)},
          expand: function(event)
          { 
            var elementWasOpen = (element === openElement);

            // The default action of the event will not be triggered (e.g. clicked anchors will not take the browser to a new URL) and prevented from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
            if (event) {
              event.preventDefault();
              event.stopPropagation();
            }

            if (!!openElement)
            {
              closeActive(event)
            }
            
            if (!elementWasOpen && !element.hasClass('disabled') && !element.prop('disabled')) { 
              scope.isCollapse = false;
              openElement = element;
              closeActive = function (event) {
                // The default action of the event will not be triggered (e.g. clicked anchors will not take the browser to a new URL) and prevented from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
                if (event) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                // collapse element
                scope.isCollapse = true;


                // remove function to collapse element when clicking outside of it and deletes function.
                // $document.unbind('click',  documentCliclHandler);
                closeActive = angular.noop;
                openElement = null;
              };
              //$document.bind('click', documentCliclHandler);
            };
          },



          toggleState: function(event) {
            if (scope.isCollapse) {
              scope.name.expand(event);
            } else {
              scope.name.collapse(event);
            }
  	      }
  	    };
        scope.collapseApply = function(event) {
          scope.$apply(scope.name.collapse(event));
        };

        // Initially show element collapsed
        scope.isCollapse = true;
        scope.$watch('$location.path', function() { scope.name.collapse(); });
        //element.parent().bind('click', function() { alert(); scope.name.collapse(); });
      }
    };
  });