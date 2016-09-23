var storefrontApp = angular.module('storefrontApp', []);

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
        $scope.isLoading = true;
        var blogSearchCriteria = {
            category: $window.currentBlogCategory,
            tag: $window.currentBlogTag,
            pageNumber: pageNumber,
            pageSize: $window.pageSize,
        };
        blogService.getArticles($window.blogName, blogSearchCriteria).then(function (response) {
            _.each(response.data, function (article) {
               article.imageUrl = $window.baseUrl + (article.imageUrl || 'themes/assets/blue-abstract-background.jpg');
               article.authorImageUrl = $window.baseUrl + 'themes/assets/logo-mini.png';
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