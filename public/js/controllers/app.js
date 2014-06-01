function AppCtrl ($scope) {
  $scope.airportTemplate = 'partials/airport.html';

  $scope.setActive = function (type) {
    $scope.destinationsActive = '';
    $scope.flightsActive = '';
    $scope.reservationsActive = '';

    $scope[type + 'Active'] = 'active';
  }



}