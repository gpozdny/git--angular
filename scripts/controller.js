MyApp.controller('myController', ['$scope', '$http', 'githubService', function ($scope, $http, githubService) {
    $scope.searchBar = "";
    $scope.userData = {};
    $scope.userSearch = function () {
        if (!$scope.searchBar) {
            $scope.userData = {};
            return
        }
        githubService.getUserInfo($scope.searchBar).then(function (data) {
            $scope.userData = data;
        });
    };
    githubService.getUserInfoTest($scope.searchBar).then(function (data) {
        $scope.userData = data;
    });
}]);