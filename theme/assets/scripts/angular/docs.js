var storefrontApp = angular.module('storefrontApp', []);

storefrontApp.controller('docsController', ['$scope', '$window', function ($scope, $window) {
    $scope.menuItems = buildMenu($window.menuItems, $window.pageUrl);

    function buildMenu(menuItems, pageUrl) {
        _.each(menuItems, function (menuItem) {
            menuItem.parents = getMenuItemParents(menuItem, menuItems);
        });
        _.each(menuItems, function (menuItem) {
            var submenu = getMenuItemSubmenu(menuItem, menuItems);
            var hasActiveSubmenuItem = _.some(submenu, function (item) { return item.url === pageUrl });
            submenu.expanded = (menuItem.url == pageUrl) || hasActiveSubmenuItem;
            menuItem.submenu = submenu;
        });
        var pageUrlParts = pageUrl.split('/');
        menuItems = _.find(menuItems, function (menuItem) { return menuItem.url === pageUrlParts[0] }).submenu;
        if (pageUrlParts.length >= 2) {
            var docTypeUrl = pageUrlParts[0] + '/' + pageUrlParts[1];
            menuItems = _.find(menuItems, function (menuItem) { return menuItem.url === docTypeUrl }).submenu;
        }
        return _.sortBy(menuItems, function (menuItem) { return menuItem.sorting });
    }

    function getMenuItemSubmenu(menuItem, menuItems) {
        var submenu = _.filter(menuItems, function (item) {
            var lastParent = item.parents[item.parents.length - 1];
            return lastParent && (menuItem.url === lastParent.url);
        });
        return _.sortBy(submenu, function (item) { return item.sorting });
    }

    function getMenuItemParents(menuItem, allMenuItems) {
        var parents = [];
        var parentUrlParts = getParentUrlParts(menuItem);
        var parentUrls = getParentUrls(parentUrlParts);
        _.each(parentUrls, function (parentUrl) {
            var parent = _.find(allMenuItems, function (item) { return item.url === parentUrl });
            if (parent) {
                parents.push(parent);
            }
        });
        return parents;
    }

    function getParentUrls(urlParts) {
        var urls = [];
        for (var i = 0; i < urlParts.length; i++) {
            var subarray = urlParts.slice(0, i + 1);
            urls.push(subarray.join('/'));
        }
        return urls;
    }

    function getParentUrlParts(menuItem) {
        var urlParts = menuItem.url.split('/');
        return _.without(urlParts, urlParts[urlParts.length - 1]);
    }
}]);

storefrontApp.component('vcDocsBreadcrumbs', {
    templateUrl: 'themes/assets/docs-page-path.tpl.html',
    bindings: {
        parents: '='
    }
});

storefrontApp.component('vcDocsMenu', {
    templateUrl: 'themes/assets/docs-menu.tpl.html',
    bindings: {
        items: '=',
        url: '=',
        isSubmenu: '='
    }
});