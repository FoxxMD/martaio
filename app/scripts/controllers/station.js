'use strict';

angular.module('martaioApp')
  .controller('StationCtrl', function ($scope, $rootScope, $http, $routeParams, Marta) {
    $scope.station = $routeParams.station;
  	$scope.Marta = Marta;
  });
