var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('accountController', ['$scope', '$window', '$localStorage', '$location', 'communityService', 'customerService', 'accountApi', 'mainContext', function ($scope, $window, $localStorage, $location, communityService, customerService, accountApi, mainContext) {
    
    $scope.initialize = function () {
        customerService.getCurrentCustomer().then(function (customer) {
            $scope.temp = angular.copy(customer.data);
            $scope.user = customer.data;
            $scope.newAddresses = {};
            if (!_.isEmpty($scope.user.addresses))
                if (!angular.isUndefined(_.first($scope.user.addresses).organization))
                    angular.extend($scope.newAddresses, { organization: _.first($scope.user.addresses).organization });
        })
    }

    $scope.updateAccount = function (changedData, newAddresses) {
        var changedAddresses = communityService.getProfileParameters(newAddresses);
        accountApi.updateAccount(changedData, mainContext.getCustomer).$promise;
        accountApi.updateAddresses([changedAddresses], mainContext.getCustomer).$promise;
        document.location.href = "/vc-community";
    }


    $scope.cancel = function () {
        $scope.user = angular.copy($scope.temp);
    }

    mainContext.getCustomer = $scope.getCustomer = function () {
        customerService.getCurrentCustomer().then(function (response) {
            var addressId = 1;
            _.each(response.data.addresses, function (address) {
                address.id = addressId;
                addressId++;
            });
            response.data.isContact = response.data.memberType === 'Contact';
            mainContext.customer = $scope.customer = response.data;
        });
    };
    $scope.getCustomer();
      
}])
   .factory('mainContext', function () {
       return {};
   });
