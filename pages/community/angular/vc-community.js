var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('communityController', ['$scope', '$window', '$location', '$localStorage', 'communityService', 'customerService', function ($scope, $window, $location, $localStorage, communityService, customerService) {
    console.log($localStorage);
    $scope.loaded = false;

    customerService.getCurrentCustomer().then(function (user) {
        if (user.data.userName == "Anonymous" ) {
            document.location.href = "account/login";
        };
        console.log(user);
        $scope.user = user.data;
        if (!_.isEmpty($scope.user.addresses))
            if (!angular.isUndefined(_.first($scope.user.addresses).organization))
                $scope.user.organization = _.first($scope.user.addresses).organization;

        communityService.getGithubData(user.data.firstName).then(function (resp) {
            console.log(resp);
            $scope.github = { poolRequest: resp.data.total_count };
            console.log($scope);
            communityService.checkUserPersonalData($scope.user, $scope.github.poolRequest).then(function (resp) {
                $scope.percentage = resp.percentage;
                $scope.points = resp.points;
                $scope.rating = resp.rating
                $scope.loaded = true;
            })
        })
    })

    $scope.connectToGithub = function () {
        communityService.linkGithubAccount().then(function (r) {
            communityService.getGithubAccount().then(function (resp) {
                $scope.github = resp;
                console.log(resp)
            });
        });
    };

}]);
