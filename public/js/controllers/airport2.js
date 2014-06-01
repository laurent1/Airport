function Airport2Ctrl ($scope, $routeParams, Airport) {
  $scope.currentAirport = Airport.get({
    airportCode: $routeParams.airport2
  });
}