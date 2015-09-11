angular.module('jobsController', [])
	.controller('mainController', ['$scope','$http','Jobs', function($scope, $http, Jobs) {
		$scope.formData = {};
		$scope.loading = true;

		/*
		* Display all Jobs when page loads
		*/
		Jobs.get()
			.success(function(data) {
				$scope.Jobs = data;
				$scope.loading = false;
			});

		/*
		* Add a Job
		*/
		$scope.createJob = function() {
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				Jobs.create($scope.formData)
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; 
						$scope.Jobs = data; 
					});
			}
		};

		/*
		* Delete a Job
		*/
		$scope.deleteJob = function(id) {
			$scope.loading = true;

			Jobs.delete(id)
				.success(function(data) {
					$scope.loading = false;
					$scope.Jobs = data;
				});
		};
	}]);