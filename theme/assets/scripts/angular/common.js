var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('mainController', ['$scope', '$window', '$location', '$anchorScroll', 'feedbackService', 'dialogService', function ($scope, $window, $location, $anchorScroll, feedbackService, dialogService) {
    $scope.formModel = {};
    $scope.$location = $location;

    $scope.scrollTo = function (id) {
        var old = $location.hash();
        $location.hash(id);
        $anchorScroll();
        $location.hash(old);
    }

    $scope.setForm = function (form) {
        $scope[form.$name] = form;
        $scope.formModel = {};
    }

    $scope.submit = function (form) {
        form.$setSubmitted();
        if (form.$invalid) {
            return;
        }
        feedbackService.postFeedback($scope.formModel).then(function (response) {
            if ($scope.formModel.redirectUrl) {
                $window.location.href = $scope.formModel.redirectUrl;
            }
        }, function (response) {
        });
    }

    $scope.showContactUsForm = function () {
        dialogService.showDialog(null, 'feedbackController', 'storefront.contact-us-form.tpl');
    }
}]);