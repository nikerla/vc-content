var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('accountController', ['$scope', '$window', '$localStorage', '$location', 'communityService', function ($scope, $window, $localStorage, $location, communityService) {
    console.log($localStorage);
    $scope.createAccount = function (data) {
        communityService.registerInCommunity(data).then(function (resp) {
            if (resp == 'User was registered successfully') {
                window.location = "http://localhost/store/vccom/vc-comunity"
            }
        })
    };

    $scope.signIn = function (data) {
        communityService.login(data).then(function (resp) {
            if (resp == 200) {
                window.location = "http://localhost/store/vccom/vc-comunity";
            }
            else $scope.error = true;
        })
    }

    $scope.initialize = function () {
        communityService.getCustomer().then(function (customer) {
            $scope.temp = angular.copy(customer);
            $scope.user = customer;
        })
    }

    $scope.save = function (profile) {
        $scope.temp = angular.copy($scope.user);
        communityService.updateUserProfile(profile);
        window.location = "http://localhost/store/vccom/vc-comunity";
    }

    $scope.cancel = function () {
        $scope.user = angular.copy($scope.temp);
    }

}]);
