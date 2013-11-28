'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

// Unsed directives. Attemp for collapsableElement directive
// angular.module('myApp.directives', []).directive('slideToggle', function() {
//     return {
//         restrict: 'CA',
//         link: function(scope, element, attrs) {
//             var target = document.querySelector(attrs.slideToggle);
//             attrs.expanded = false;
//             element.bind('click', function() {
//                 var content = target.querySelector('.slideable_content');
//                 if(!attrs.expanded) {
//                     content.style.border = '1px solid rgba(0,0,0,0)';
//                     var y = content.clientHeight;
//                     content.style.border = 0;
//                     target.style.height = y + 'px';
//                 } else {
//                     target.style.height = '0px';
//                 }
//                 attrs.expanded = !attrs.expanded;
//             });
//         }
//     }
// }).
// directive('metroDropdownToggle', ['$document', '$location', function ($document, $location) {
//   var openElement = null,
//       closeMenu   = angular.noop;
//   return {
//     restrict: 'CA',
//     link: function(scope, element, attrs) {

//       function slideUp(elem)
//       {

//         // show element if it is hidden (it is needed if display is none)
//         //elem.show();

//         // get naturally height
//         var height = elem.height();

//         // set initial css for animation
//         elem.css({
//             height: 0
//         });

//         // animate to gotten height
//         elem.animate({
//             height: height
//         }, 200);
//       }


//       scope.$watch('$location.path', function() { closeMenu(); });
//       element.parent().bind('click', function() { closeMenu(); });
//       element.bind('click', function (event) {

//         var elementWasOpen = (element === openElement);

//         event.preventDefault();
//         event.stopPropagation();

//         if (!!openElement) {
//           closeMenu();
//         }

//         if (!elementWasOpen && !element.hasClass('disabled') && !element.prop('disabled')) {
//           element.parent().addClass('open');

//           slideUp(element.parent().find('ul'));
          
//           openElement = element;
//           closeMenu = function (event) {
//             if (event) {
//               event.preventDefault();
//               event.stopPropagation();
//             }
//             $document.unbind('click', closeMenu);
//             //element.parent().removeClass('open');
//             closeMenu = angular.noop;
//             openElement = null;
//           };
//           $document.bind('click', closeMenu);
//         }
//       });
//     }
//   };
// }]);