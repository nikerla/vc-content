var storefrontApp = angular.module('storefrontApp', []);

storefrontApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        rewriteLinks: false
    });
}]);

storefrontApp.controller('docsController', ['$scope', '$window', function ($scope, $window) {
    var pageUrl = $window.pageUrl || 'docs';
    $scope.pages = $window.pages;
    $scope.menuItems = getDocsMenu($window.pages);
    $scope.page = getCurrentPage(pageUrl, $window.pages);

    function getDocsMenu(pages) {
        var menu = [];
        _.each(_.sortBy(pages, function (page) { return page.url.split('/').length }), function (page) {
            page.parents = getParentPages(page.url, pages);
            page.children = getChildPages(page.url, pages);
            if (page.parents.length === 1) {
                menu.push(page);
            }
        });
        return menu;
    }

    function getParentPages(url, pages) {
        var parents = [];
        var urlParts = url.split('/');
        var urlPathLength = urlParts.length;
        for (var i = 0; i < urlPathLength; i++) {
            urlParts.pop();
            var parent = _.find(pages, function (page) { return page.url.toLowerCase() === urlParts.join('/').toLowerCase(); });
            if (parent) {
                parents.push(parent);
            }
        }
        return parents.reverse();
    }

    function getChildPages(url, pages) {
        var children = _.filter(pages, function (p) {
            return (p.url.split('/').length === url.split('/').length + 1) && (p.url.toLowerCase().indexOf(url.toLowerCase() + '/') >= 0);
        });
        return _.sortBy(children, function (p) { return p.priority });
    }

    function getCurrentPage(pageUrl, pages) {
        return _.find(pages, function (p) { return p.url.toLowerCase() === pageUrl.toLowerCase() });
    }
}]);

storefrontApp.component('vcDocsMenu', {
    templateUrl: 'themes/assets/docs-menu.tpl.html',
    bindings: {
        items: '=',
        url: '=',
        isSubmenu: '=',
        tree: '=',
        pages: '='
    },
    controller: function ($scope, $location, $http, $compile, $window) {
        var pageUrl = this.url || 'docs';
        expandPageInMenu(pageUrl, this.pages);
        this.navigateUrl = function (url, tree) {
            this.url = url;
            $location.path(url);
            $http.get(url).then(function (response) {
                $scope.page = _.find(this.pages, function (p) { return p.url === url });
                $scope.menuItems = tree;
                $scope.url = url;
                var parser = new DOMParser();
                var newDoc = parser.parseFromString(response.data, 'text/html');
                var breadcrumbs = $compile(newDoc.getElementById('breadcrumbs'))($scope);
                angular.element(window.document.getElementById('breadcrumbs')).html(breadcrumbs);
                var topics = $compile(newDoc.getElementById('topics'))($scope);
                angular.element(window.document.getElementById('topics')).html(topics);
                expandPageInMenu(url, this.pages);
                window.document.getElementById('page-content').innerHTML = newDoc.getElementById('page-content').innerHTML;
                window.document.getElementsByTagName('title')[0].innerText = $scope.page.title + ' - Virto Commerce Documentation';
            });
        }

        function expandPageInMenu(pageUrl, pages) {
            _.each(pages, function (p) { p.expanded = false });
            var page = _.find(pages, function (p) { return p.url === pageUrl });
            if (page.children && page.children.length) {
                page.expanded = true;
            }
            if (page.parents && page.parents.length) {
                _.each(page.parents, function (parentPage) {
                    parentPage.expanded = true;
                });
            }
            return pages;
        }
    }
});

storefrontApp.component('vcDocsBreadcrumbs', {
    templateUrl: 'themes/assets/docs-breadcrumbs.tpl.html',
    bindings: {
        page: '='
    }
});

storefrontApp.component('vcDocsPageTopics', {
    templateUrl: 'themes/assets/docs-page-topics.tpl.html',
    bindings: {
        page: '='
    },
    controller: function () {
        if (this.page.children && this.page.children.length) {
            this.page.children = _.sortBy(this.page.children, function (page) { return page.priority });
        }
    }
});