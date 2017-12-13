MyApp.directive('userCard', function (githubService) {
    return {
        restrict: 'E',
        scope: {
            userInfo: '='
        },
        templateUrl: 'card.html',
        link: function (scope, element, attrs) {
            scope.loading = false;
            scope.loaded = false;
            scope.repos = [];
            scope.showMore = function(){scope.loading = true;
                githubService.getInfoByUrl(scope.userInfo.repos_url).then(function (data) {
                    scope.loaded = true;
                    scope.repos = data;
                    scope.loading = false;
                });
            }
        }
    };
});