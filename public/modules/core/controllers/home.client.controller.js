'use strict';


angular.module('core').controller('HomeController', ['$scope', 'ngMaterial', 'Authentication',
	function($scope, Authentication, ngMaterial) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		// $scope.toggleSidenav = function(menuId) {
	 //    	$mdSidenav(menuId).toggle();
		// };
	}
]);