(function(){
  var prx = { code: 'Azurite', price: 2.95 };
  var app = angular.module('kiosk', [ ]);
  app.controller('Proximity',['$scope','$interval', function($scope,$interval){
    $scope.proximity = prx;
    $scope.prxtimer = 0;
      var stop;
      $scope.clearproxmt = function() {
        if ( angular.isDefined(stop) ) return;

        stop = $interval(function() {
          if ($scope.prxtimer>0){
            $scope.prxtimer--;
          } else {
//           $scope.proximity.code = "";
          } 
        }, 100);
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
    controllerScope.prxtimer = 10;
    appScope.$apply(function() {});
}
