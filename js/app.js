(function(){
  var prx = { code: 'Azurite', price: 2.95 };
  var app = angular.module('kiosk', ['ngAnimate','ngRoute']);
  app.controller('Proximity',['$scope','$interval', function($scope,$interval){
    $scope.proximity = prx;

      var stop;
      $scope.clearproxmt = function() {
        if ( angular.isDefined(stop) ) return;

        stop = $interval(function() {
          if ($scope.proximity.code.length>0){
            $scope.proximity.code = $scope.proximity.code.substring(0,$scope.proximity.code.length-1);
          }
        }, 200);
    };
    $scope.clearproxmt();
  }]);
})();

function changeProximityCode(code) {
    var appElement = document.querySelector('[ng-app=kiosk]');
    var appScope = angular.element(appElement).scope();
    var controllerElement = document.getElementById('info');
    var controllerScope = angular.element(controllerElement).scope();
    controllerScope.proximity.code = code;
    appScope.$apply(function() {});
}
