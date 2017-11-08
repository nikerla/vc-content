var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('accountController', ['$scope', '$window', '$localStorage', 'communityService', function ($scope, $window, $localStorage, communityService) {
    $scope.createAccount = function (data) {
        communityService.registerInCommunity(data).then(function (resp) {
            console.log(resp, data, 'registration');
        })
    }
    $scope.signIn = function (data) {
        communityService.getCustomer().then(function (resp) {
            console.log(data, resp);
            //if (exist)
            //    redirect to community
            //else error = 'invalid login or password';
        })
    }

}]);