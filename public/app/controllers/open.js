'use strict';

var openCtrl = TicketApp.controller('openCtrl' , function($scope , $http) {
$scope.pageIndex = 0;
$scope.tickets = [];


$scope.open = function() {
alert('open Tickets');
$http({method: 'GET',
url: './openTickets?index=' + $scope.pageIndex
//data: $scope.user
})
.then( function(result) {
  alert('success');
$scope.tickets = result.data;
})
.catch( function(err) {

})
.finally(function() {

});

};

$scope.open();

});
