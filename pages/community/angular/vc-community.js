var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('communityController', ['$scope', '$window', '$location', '$localStorage', 'communityService', 'customerService', function ($scope, $window, $location, $localStorage, communityService, customerService) {
    $scope.loaded = false;

    customerService.getCurrentCustomer().then(function (user) {
        if (user.data.userName == "Anonymous" ) {
            document.location.href = "account/login";
        };

        $scope.user = user.data;

        if (!_.isEmpty($scope.user.addresses)) {
            if (!angular.isUndefined(_.first($scope.user.addresses).organization))
                $scope.user.organization = _.first($scope.user.addresses).organization;
        }

        var githubAccount = _.find(user.data.logins, { loginProvider: 'GitHub' });
        var stackExchangeAccount = _.find(user.data.logins, { loginProvider: 'StackExchange' });
               
        if (!angular.isUndefined(githubAccount)) {
            communityService.getGithubProfile(githubAccount.providerKey).then(function (profile) {
                var profile = profile.data;
                communityService.getGithubStatistic(profile.login).then(function (statistic) {
                    $scope.github = { poolRequest: statistic.data.total_count };
                    if (!profile.name)
                        $scope.github.userName = profile.login;
                    else
                        $scope.github.userName = profile.name;

                    communityService.checkUserPersonalData($scope.user, $scope.github.poolRequest).then(function (resp) {
                        $scope.percentage = resp.percentage;
                        $scope.points = resp.points;
                        $scope.rating = resp.rating
                        $scope.loaded = true;
                    })
                })
            })
        }

        if (!angular.isUndefined(stackExchangeAccount)) {
            communityService.getStackExchangeProfile(stackExchangeAccount.providerKey).then(function (resp) {
                $scope.stackExchange = resp.data;
                //communityService.checkUserPersonalData($scope.user, $scope.github.poolRequest).then(function (resp) {
                //    $scope.percentage = resp.percentage;
                //    $scope.points = resp.points;
                //    $scope.rating = resp.rating
                //    $scope.loaded = true;
                //})
            })
        }

        $scope.loaded = true;
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
