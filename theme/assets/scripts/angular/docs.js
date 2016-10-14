var storefrontApp = angular.module('storefrontApp', []);

storefrontApp.controller('docsController', ['$scope', '$window', function ($scope, $window) {
    var pageUrl = $window.pageUrl || 'docs';
    $scope.menuItems = getDocsMenu($window.pages, pageUrl);
    $scope.page = getCurrentPage(pageUrl, $window.pages);

    function getDocsMenu(pages, pageUrl) {
        _.each(pages, function (page) {
            page.parents = getParentPages(page, pages);
            page.children = getChildPages(page, pages);
        });
        pages = expandPageInMenu(pageUrl, pages);
        var pageUrlParts = pageUrl.split('/');
        pages = _.find(pages, function (page) { return page.url === pageUrlParts[0] }).children;
        if (pageUrlParts.length >= 2) {
            var docTypeUrl = pageUrlParts[0] + '/' + pageUrlParts[1];
            pages = _.find(pages, function (page) { return page.url === docTypeUrl }).children;
        }
        return _.sortBy(pages, function (page) { return page.priority });
    }

    function expandPageInMenu(pageUrl, pages) {
        var page = getCurrentPage(pageUrl, pages);
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

    function getCurrentPage(pageUrl, pages) {
        return _.find(pages, function (p) { return p.url === pageUrl });
    }

    function getParentPages(page, allPages) {
        var parentPages = [];
        var parentPagesUrls = getParentPagesUrls(page);
        _.each(parentPagesUrls, function (pageUrl) {
            var parentPage = _.find(allPages, function (page) { return page.url === pageUrl });
            if (parentPage) {
                parentPages.push(parentPage);
            }
        });
        return parentPages;
    }

    function getChildPages(page, allPages) {
        var pageUrlParts = getPageUrlParts(page);
        var childPages = _.filter(allPages, function (p) {
            var pUrlParts = getPageUrlParts(p)
            return (pUrlParts.length === pageUrlParts.length + 1) && (p.url.indexOf(page.url + '/') >= 0);
        });
        return _.sortBy(childPages, function (p) { return p.priority });
    }

    function getParentPagesUrls(page) {
        var urls = [];
        var urlParts = getPageUrlParts(page);
        for (var i = 0; i < urlParts.length; i++) {
            var subarray = urlParts.slice(0, i + 1);
            urls.push(subarray.join('/'));
        }
        return urls;
    }

    function getPageUrlParts(page) {
        var urlParts = page.url.split('/');
        return _.without(urlParts, urlParts[urlParts.length - 1]);
    }
}]);

storefrontApp.component('vcDocsMenu', {
    templateUrl: 'themes/assets/docs-menu.tpl.html',
    bindings: {
        items: '=',
        url: '=',
        isSubmenu: '='
    },
    controller: ['$location', function ($location) {
        this.navigate = function (url) {
            $location.path(url);
        }
    }]
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