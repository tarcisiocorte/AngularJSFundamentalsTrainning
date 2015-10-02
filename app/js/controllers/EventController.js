'use strict';

eventsApp.controller('EventController',
	function EventController($scope){
		$scope.event = {
			name: "Angular Boot Camp",
			date: "1/1/2015",
			time: "10:30 am" ,
			location: {
				address: "14 Leinster Road",
				city: "Dublin",
				province: "Dublin Co."
			},
			imageUrl: "/img/angularjs-logo.png"
		}
	}

);