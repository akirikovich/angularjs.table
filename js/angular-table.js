(function() {
	angular.module("angularTable", [])
		.controller("tableController", ["$scope", "$http", function($scope, $http) {
			
			$scope.searchField = "Name";
			
			$http({
				method: "get",
				url: "/js/data/users.json"
			}).then(function(response) {
				$scope.users = response.data;
			});
			
			$scope.predicate = 'age';
			$scope.reverse = true;
			$scope.setOrder = function(predicate) {
				$scope.reverse = ($scope.predicate == predicate) ? !$scope.reverse : false;
				$scope.predicate = predicate;
			}
		}]);
})();
