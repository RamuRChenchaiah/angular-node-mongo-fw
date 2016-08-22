angular.module('jobsController', [])
    .controller('mainController', ['$scope', '$http', 'Jobs', ($scope, $http, Jobs) => {
        $scope.formData = {};
        $scope.loading = true;

        /*
         * Display all Jobs when page loads
         */
        Jobs.get()
            .then(res => {
                $scope.Jobs = res.data;
                $scope.loading = false;
            }, err => console.log(err));

        /*
         * Add a Job
         */
        $scope.createJob = () => {
            if ($scope.formData.text != undefined) {
                $scope.loading = true;

                Jobs.create($scope.formData)
                    .then(res => {
                        $scope.loading = false;
                        $scope.formData = {};
                        $scope.Jobs = res.data;
                    }, err => console.log(err));
            }
        };

        /*
         * Delete a Job
         */
        $scope.deleteJob = id => {
            $scope.loading = true;

            Jobs.delete(id)
                .then(res => {
                    $scope.loading = false;
                    $scope.Jobs = res.data;
                }, err => console.log(err));
        };
    }]);
