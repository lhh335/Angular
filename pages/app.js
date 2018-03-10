var app = angular.module('practice', []);

app.controller('work', function ($scope, $rootScope, $location) {


})

app.directive('card', [function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: '/views/page1.html',
        link: function (scope, element, attr) {
            console.log(scope, element, attr);
            document.getElementById('page1').onmouseover = function () {
                this.style.color = 'blue';
            }
            document.getElementById('page1').onmouseout = function () {
                this.style.color = 'red';
            }
        }
    }
}])



