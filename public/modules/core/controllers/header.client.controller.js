'use strict';

angular.module('core', ['ngMaterial']).controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		// $scope.toggleCollapsibleMenu = function() {
		// 	$scope.isCollapsed = !$scope.isCollapsed;
		// };

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});

		// .config(function($mdThemingProvider) {
		//   $mdThemingProvider.theme('default')
		//     .primaryPalette('pink')
		//     .accentPalette('orange');
		// });
	}
]);