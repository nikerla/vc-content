var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('communityController', ['$scope', '$window', '$location', '$localStorage', 'communityService', function ($scope, $window, $location, $localStorage, communityService) {
    console.log('123', $localStorage);
    $scope.loaded = false;

    communityService.getCustomer().then(function (user) {
        if (user == 'User is Unregistered') {
            window.location = "http://localhost/store/vccom/login"
        };
        $scope.user = user;
        communityService.checkUserPersonalData($scope.user.user_name).then(function (resp) {
            $scope.percentage = resp.percentage;
            $scope.points = resp.points;
            $scope.loaded = true;
        })
        communityService.getGithubAccount().then(function (resp) {
            $scope.github = resp;
        });
    })

    $scope.connectToGithub = function () {
        communityService.linkGithubAccount().then(function (r) {
            communityService.getGithubAccount().then(function (resp) {
                $scope.github = resp;
                console.log(resp)
            });
        });
        
    };

    $scope.disconnectfromGithub = function () {
        communityService.disconnectGithubAccount();
        $scope.github = {};
        console.log($scope);
    }

}]);
