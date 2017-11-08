var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('communityController', ['$scope', '$window', '$location', '$localStorage', 'communityService', function ($scope, $window, $location, $localStorage, communityService) {
    console.log('123', $localStorage);
    
    communityService.getCustomer().then(function (user) {
        if (user == '') { window.location = "http://localhost/store/vccom/login" };
        console.log(user, 'getname');
        //$scope.userName = user.data.userName;
    })
    //initialize();

    //function initialize() {

    //}

}]);