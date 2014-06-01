function Airport1Ctrl ($scope, $routeParams, Airport) {
  $scope.currentAirport = Airport.get({
    airportCode: $routeParams.airport1
  });
}