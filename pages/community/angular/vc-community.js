var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('communityController', ['$scope', '$window', function ($scope, $window) {
    console.log('123');
    //initialize();

    //function initialize() {
    //    $scope.productOverviewVisible = true;
    //    var productIds = $window.productIds[0];
    //    catalogService.getProduct(productIds).then(function (response) {
    //        var product = response.data[0];
    //        $scope.product = product;
    //        selectVariation(product.variations[0].id);
    //        var fullDescription = _.find(product.properties, function (p) { return p.name === 'Overview' });
    //        if (fullDescription) {
    //            $scope.fullDescription = $sce.trustAsHtml(fullDescription.value);
    //        }
    //    });
    //}

}]);