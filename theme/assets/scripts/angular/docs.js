var storefrontApp = angular.module('storefrontApp', ['pascalprecht.translate']);

storefrontApp.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
    $translateProvider.useUrlLoader(BASE_URL + 'themes/localization.json');
    $translateProvider.preferredLanguage('en');
}]);

storefrontApp.controller('docsController', ['$scope', '$window', '$http', function ($scope, $window, $http) {
    $scope.getMenuItems = function () {
        $http.get(BASE_URL + 'themes/assets/docs-menu.json').then(function (response) {
            var docTypeMenuItem = _.find(response.data, function (rootMenuItem) { return $window.pageUrl.indexOf(rootMenuItem.url) >= 0; });
            $scope.menuItems = docTypeMenuItem ? docTypeMenuItem.submenu : response.data;
        });
    }
}]);

storefrontApp.component('vcDocsMenu', {
    templateUrl: 'themes/assets/docs-menu.tpl.html',
    bindings: {
        items: '=',
        url: '=',
        parent: '=',
        isSubmenu: '='
    }
});