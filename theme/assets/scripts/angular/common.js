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

    $scope.showBecomeADeveloperForm = function () {
        dialogService.showDialog(null, 'feedbackController', 'storefront.form-become-a-developer.tpl');
    }

    $scope.showWriteAReviewForm = function () {
        dialogService.showDialog(null, 'feedbackController', 'storefront.form-write-a-review.tpl');
    }

    $scope.showContactVendorForm = function () {
        dialogService.showDialog(null, 'feedbackController', 'storefront.form-contact-vendor.tpl');
    }

    $scope.showSupportVendorForm = function () {
        dialogService.showDialog(null, 'feedbackController', 'storefront.form-support-vendor.tpl');
    }
}]);