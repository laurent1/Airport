function ReservationsCtrl ($scope, Reservations, Flights) {
	$scope.setActive('reservations');

  $scope.flights = Flights.query();
	$scope.reservations = Reservations.query();

	$scope.reserveFlight = function  () {
		Reservations.save($scope.reserve, function (data) {
			$scope.reserve.origin = '';
			$scope.reserve.destination = '';

			$scope.reservations.push(data);
		});
	}
}