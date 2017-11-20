var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('accountController', ['$scope', '$window', '$localStorage', '$location', 'communityService', 'customerService', 'accountApi', 'mainContext', function ($scope, $window, $localStorage, $location, communityService, customerService, accountApi, mainContext) {
    console.log($localStorage);

    //$scope.signIn = function (data) {
    //    communityService.login(data).then(function (resp) {
    //        if (resp == 200) {
    //            window.location = "https://localhost:44320/store/vccom/vc-comunity";
    //        }
    //        else $scope.error = true;
    //    })
    //}
    //$scope.lastLogin = function (providerName) {
    //    communityService.addToAccount(providerName).then(function (resp) {

    //    }) 
    //}

    $scope.initialize = function () {
        customerService.getCurrentCustomer().then(function (customer) {
            $scope.temp = angular.copy(customer.data);
            console.log(customer.data, customer);
            $scope.user = customer.data;
            $scope.newAddresses = {};
            if (!_.isEmpty($scope.user.addresses))
                if (!angular.isUndefined(_.first($scope.user.addresses).organization))
                    angular.extend($scope.newAddresses, { organization: _.first($scope.user.addresses).organization });
            console.log($scope.newAddresses);
        })
    }

    $scope.updateAccount = function (changedData, newAddresses) {
        var changedAddresses = communityService.getProfileParameters(newAddresses);
        console.log(changedData);
        accountApi.updateAccount(changedData, mainContext.getCustomer).$promise;
        console.log(accountApi.updateAccount(changedData, mainContext.getCustomer).$promise);
        accountApi.updateAddresses([changedAddresses], mainContext.getCustomer).$promise;
        window.location = "https://localhost:44320/store/vccom/vc-comunity";
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
