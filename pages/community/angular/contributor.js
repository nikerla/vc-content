var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('contributorController', ['$scope', '$window', '$timeout', '$location', '$localStorage', 'communityService', function ($scope, $window, $timeout, $location, $localStorage, communityService) {

    function initialize() {

        communityService.getCustomer().then(function (user) {
            console.log(user,'1');
            if (user == 'User is Unregistered') {
                window.location = "http://localhost/store/vccom/login"
            }
            else {
                $scope.user_name = user.user_name;
                $scope.reloadContributorData();
            }
        })
    }

    $scope.reloadContributorData = function () {
        communityService.getContributor().then(function (contributor) {
            if (!_.isEmpty(contributor)) {
                console.log(contributor[$scope.step]);
                $scope.contributor = contributor[$scope.step];
            }
            $scope.loaded = true;
            console.log($scope, contributor, $scope.step, '14');
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
            communityService.addContributor(data, $scope.step, $scope.user_name).then(function (resp) {
                if (resp)
                    $scope.contributor = {};
            })
        updateStep();
    }
    
    initialize();
}]);
