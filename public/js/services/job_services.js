angular.module('jobsService', [])
	.factory('Jobs', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/jobs');
			},
			create : function(todoData) {
				return $http.post('/api/jobs', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/jobs/' + id);
			}
		}
	}]);