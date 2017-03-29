//Variable qui va déclarer le cotroleur
var surpriseApp = angular.module('surpriseApp', []);
//Déclaration du controleur
surpriseApp.controller('alertCtrl', ['$scope', '$window', function ($scope, $window) {
//$scope = Lien entre la vue et le contrôleur
        $scope.message = 'Ben surprise ;-)';
        $scope.doAlert = function (message) {
            $window.alert(message);
        };
    }]);