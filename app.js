var app = angular.module('app', ['ui.bootstrap']);

var myCtrl = function($scope, $modal) {
	$scope.data = [
		{a: 'a', b: 'b'},
		{c: 'c', d: 'd'}
	];

	/* Open button fires this */
	$scope.open = function() {
		/* $modal 1) opens a modal 2) returns a modal instance
		 * modal instances have close/dismiss methods */
		var modalInstance = $modal.open({
			controller: 'modalCtrl',
			size: 'sm',
			templateUrl: 'template.html'
		});

		modalInstance.result.then(function () {
			$scope.data = "The modal was closed!";
		}, function() {
			$scope.data = "The modal was dismissed!";
		});
	};
}

var modalCtrl = function($scope, $modalInstance) {
	$scope.close = function() {
		$modalInstance.close();
	};
}

myCtrl['$inject'] = ['$scope', '$modal'];
//modalCtrl['$inject'] = ['$scope'];

app.controller("myCtrl", myCtrl);
app.controller("modalCtrl", modalCtrl);