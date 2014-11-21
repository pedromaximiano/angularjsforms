var angularFormsApp = angular.module("angularFormsApp", ["ngRoute", "ui.bootstrap"]);

angularFormsApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "/app/home.html",
            controller: "homeController"
        })
        .when("/newEmployeeForm", {
            templateUrl: "/app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .when("/newEmployeeForm/:id", {
            templateUrl: "/app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});


angularFormsApp.controller("homeController",
    function ($scope, $location, $modal, dataService) {
        $scope.showNewEmployeeForm = function () {
            $location.path("/newEmployeeForm/");
        };
        $scope.showUpdateEmployeeForm = function (id) {
            $location.path("/newEmployeeForm/" + id);
        };
    })