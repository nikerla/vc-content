var storefrontApp = angular.module('storefrontApp');

storefrontApp.controller('feedbackController', ['$scope', '$uibModalInstance', 'feedbackService', function ($scope, $uibModalInstance, feedbackService) {
    $scope.setContactUsForm = function (form) {
        $scope.formContactUs = form;
    }

    $scope.submit = function () {
        $scope.formContactUs.$setSubmitted();
        if ($scope.formContactUs.$invalid) {
            return;
        }
        $scope.model.isProcessing = true;
        feedbackService.postFeedback($scope.model).then(function (response) {
            $scope.model.isProcessing = false;
            $scope.model.isProcessed = true;
            $scope.model.isSubmittedSuccessfully = true;
        }, function (response) {
            $scope.model.isProcessing = false;
            $scope.model.isProcessed = true;
        });
    }

    $scope.closeModal = function () {
        $uibModalInstance.close();
    }

    initialize();

    function initialize() {
        $scope.model = {
            isProcessing: false,
            isProcessed: false,
            isSubmittedSuccessfully: false,
            contact: {}
        };
    }
}]);