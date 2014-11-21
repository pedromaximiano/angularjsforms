angularFormsApp.controller("efController",
    function efController($scope, $window, $routeParams, dataService) {

        if ($routeParams.id) {
            $scope.employee = dataService.getEmployee($routeParams.id);
        } else {
            $scope.employee = { id: 0 };
        }

        $scope.editableEmployee = angular.copy($scope.employee);
        $scope.departments = [
            "Administration",
            "Marketing",
            "Finance",
            "Engineering"
        ];

        $scope.isValidName = function () {
            return false;
        };

        $scope.submitForm = function () {
            if ($scope.editableEmployee.id === 0) {
                dataService.insertEmployee($scope.editableEmployee);
            } else {
                dataService.updateEmployee($scope.editableEmployee);
            }

            $scope.employee = angular.copy($scope.editableEmployee);
        };

        $scope.cancelForm = function () {
            if (!angular.equals($scope.employee, $scope.editableEmployee)) {
                if (confirm("Changes were made. Please confirm cancel operation!")) {
                    $window.history.back();
                }
            }
            else {
                $window.history.back();
            }
        };
    });