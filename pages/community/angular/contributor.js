var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('contributorController', ['$scope', '$window', '$timeout', '$location', '$localStorage', 'communityService', 'customerService', function ($scope, $window, $timeout, $location, $localStorage, communityService, customerService) {

    function initialize() {

        customerService.getCurrentCustomer().then(function (customer) {
            $scope.user_name = customer.data.firstName;
            $scope.reloadContributorData();
        })

        //communityService.getCustomer().then(function (user) {
        //    console.log(user,'1');
        //    if (user == 'User is Unregistered') {
        //        window.location = "http://localhost/store/vccom/login"
        //    }
        //    else {
        //        $scope.user_name = user.user_name;
        //        $scope.reloadContributorData();
        //    }
        //})
    }

    $scope.reloadContributorData = function () {
        communityService.getContributor($scope.user_name).then(function (contributor) {
            console.log(contributor,'getContributor');
            if (!_.isEmpty(contributor)) {
                console.log(contributor[$scope.step]);
                $scope.contributor = contributor[$scope.step];
            }
            $scope.loaded = true;
        })
    }

    function updateStep () {
        if ($scope.step == 'licenseTerms')
            $scope.step = 'contactInfo';
        else if ($scope.step == 'contactInfo')
            $scope.step = 'projectInfo'
        else {
            $scope.formCompleted = true;
            $timeout(function () { window.location = "http://localhost/store/vccom/vc-comunity" }, 1700)
        }
        $scope.reloadContributorData();
    }

    $scope.updateContributorInfo = function (data) {
        console.log($scope,'contrTestData');
        communityService.addContributorInformation(data, $scope.step, $scope.user_name).then(function (resp) {
            console.log(resp);
                if (resp)
                    $scope.contributor = {};
            })
        updateStep();
    }
    
    initialize();
}]);
