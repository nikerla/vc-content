var storefrontApp = angular.module('storefrontApp', ['pascalprecht.translate']);

storefrontApp.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
    $translateProvider.useUrlLoader(BASE_URL + 'themes/localization.json');
    $translateProvider.preferredLanguage('en');
}]);

storefrontApp.service('blogService', ['$http', function ($http) {
    return {
        getArticles: function (blogName, criteria) {
            return $http.post('storefrontapi/blog/' + blogName + '/search', { criteria: criteria });
        }
    }
}]);

storefrontApp.controller('blogController', ['$scope', '$window', 'blogService', function ($scope, $window, blogService) {
    $scope.pageNumber = 2;
    $scope.articles = [];
    
    $scope.getArticles = function (pageNumber) {
        var blogSearchCriteria = {
            category: $window.currentBlogCategory,
            tag: $window.currentBlogTag,
            pageNumber: pageNumber,
            pageSize: $window.pageSize,
            excludedArticleHandles: $window.excludedArticleHandles
        };
        $scope.isLoading = true;
        blogService.getArticles($window.blogName, blogSearchCriteria).then(function (response) {
            _.each(response.data, function (article) {
                article.imageUrl = BASE_URL + (article.imageUrl || 'themes/assets/blue-abstract-background.jpg');
                article.authorImageUrl = BASE_URL + 'themes/assets/logo-mini.png';
                $scope.articles.push(article);
            });
            if (!response.data.length || response.data.length < $window.pageSize) {
                $scope.isLastPage = true;
            }
            $scope.pageNumber++;
            $scope.isLoading = false;
        });
    }
}]);