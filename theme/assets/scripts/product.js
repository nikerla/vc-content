var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('productController', ['$scope', '$window', '$sce', 'catalogService', function ($scope, $window, $sce, catalogService) {
    initialize();

    $scope.selectVariation = function () {
        selectVariation($scope.selectedVariation.id);
    }

    $scope.showProductOverview = function () {
        $scope.productOverviewVisible = true;
        $scope.productReleaseNotesVisible = false;
    }

    $scope.showProductReleaseNotes = function () {
        $scope.productReleaseNotesVisible = true;
        $scope.productOverviewVisible = false;
    }

    function initialize() {
        $scope.productOverviewVisible = true;
        var productIds = _.map($window.products, function (product) { return product.id });
        catalogService.getProduct(productIds).then(function (response) {
            var product = response.data[0];
            $scope.product = product;
            selectVariation(product.variations[0].id);
            var fullDescription = _.find(product.properties, function (p) { return p.name === 'Overview' });
            if (fullDescription) {
                $scope.fullDescription = $sce.trustAsHtml(fullDescription.value);
            }
        });
    }

    function selectVariation(variationId) {
        var variation = _.find($scope.product.variations, function (v) { return v.id === variationId });
        if (variation) {
            variation.locale = _.find(variation.properties, function (p) { return p.name === 'Locale' });
            variation.versionNumber = _.find(variation.variationProperties, function (p) { return p.name === 'ReleaseVersion' });
            variation.releaseDate = _.find(variation.variationProperties, function (p) { return p.name === 'ReleaseDate' });
            variation.compatibility = _.find(variation.variationProperties, function (p) { return p.name === 'Compatibility' });
            variation.releaseNotes = _.find(variation.variationProperties, function (p) { return p.name === 'ReleaseNote' });
            variation.downloadLink = _.find(variation.variationProperties, function (p) { return p.name === 'DowloadLink' });
            $scope.selectedVariation = angular.copy(variation);
        }
    }
}]);