angular.module('jobsService', [])
	.factory('Jobs', ['$http', $http => {
		return {
			get : () => {
				return $http.get('/api/jobs');
			},
			create : todoData => {
				return $http.post('/api/jobs', todoData);
			},
			delete : id => {
				return $http.delete('/api/jobs/' + id);
			}
		}
	}]);