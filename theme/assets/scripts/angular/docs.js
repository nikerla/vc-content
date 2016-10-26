var storefrontApp = angular.module('storefrontApp', []);

storefrontApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        rewriteLinks: false
    });
}]);

storefrontApp.controller('docsController', ['$scope', '$http', '$location', '$compile', function ($scope, $http, $location, $compile) {
    $scope.loading = false;
    $scope.navigateUrl = function (url, event) {
        event.preventDefault();
        event.stopPropagation();
        $scope.loading = true;
        $location.path(url);
        $http.get(url).then(function (response) {
            var parser = new DOMParser();
            var newDoc = parser.parseFromString(response.data, 'text/html');
            window.document.getElementById('page-content').innerHTML = newDoc.getElementById('page-content').innerHTML;
            var menu = $compile(newDoc.getElementById('menu'))($scope);
            angular.element(window.document.getElementById('menu')).html(menu);
            var breadcrumbs = $compile(newDoc.getElementById('breadcrumbs'))($scope);
            angular.element(window.document.getElementById('breadcrumbs')).html(breadcrumbs);
            var topics = $compile(newDoc.getElementById('topics'))($scope);
            angular.element(window.document.getElementById('topics')).html(topics);
            window.document.getElementsByTagName('title')[0].innerText = newDoc.getElementsByTagName('title')[0].innerText;
            hljs.initHighlightingOnLoad();
            $scope.loading = false;
        });
    }
}]);