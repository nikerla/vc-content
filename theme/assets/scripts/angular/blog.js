var storefrontApp = angular.module('storefrontApp', []);

storefrontApp.service('blogService', ['$http', function ($http) {
    return {
        getArticles: function (blogName, filterType, criteria, page, pageSize) {
            return $http.get('storefrontapi/blog/' + blogName + '/articles?filterType=' + filterType + '&criteria=' + criteria + '&page=' + page + '&pageSize=' + pageSize + '&t=' + new Date().getTime());
        }
    }
}]);

storefrontApp.controller('blogController', ['$scope', '$window', '$location', 'blogService', function ($scope, $window, $location, blogService) {
    $scope.articles = [];
    $scope.pageNumber = 2;

    var urlParts = $location.$$absUrl.toLowerCase().split('/');
    var isTagSearch = urlParts.indexOf("tag") >= 0;
    var isCategorySearch = urlParts.indexOf("category") >= 0;
    var filterType = isTagSearch ? "tag" : isCategorySearch ? "category" : null;
    var criteria = isTagSearch || isCategorySearch ? urlParts[urlParts.length - 1] : null;

    $scope.getArticles = function (page, pageSize) {
        $scope.isLoading = true;

        blogService.getArticles($window.blogName, filterType, criteria, page, pageSize).then(function (response) {
           var articles = response.data;
           _.each(articles, function (article) {
               article.imageUrl = $window.baseUrl + (article.imageUrl || 'themes/assets/blue-abstract-background.jpg');
               article.authorImageUrl = $window.baseUrl + 'themes/assets/logo-mini.png';
               $scope.articles.push(article);
           });
           $scope.pageNumber++;
           $scope.isLoading = false;
           if (!response.data.length || response.data.length < pageSize) {
               $scope.isLastPage = true;
           } 
        }, function (response) {
            $scope.isLoading = false;
        });
    }
}]);