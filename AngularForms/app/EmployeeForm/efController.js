angularFormsApp.controller("efController",
    function efController($scope, efService) {
        $scope.employee = efService.employee;
        $scope.departments = [
            "Administration",
            "Marketing",
            "Finance",
            "Engineering"
        ];

        $scope.submitForm = function() {

        };
    });