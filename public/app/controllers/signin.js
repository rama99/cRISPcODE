var signUpCtrl = TicketApp.controller('signUpCtrl' , function($scope , $http , $location , $window) {

$scope.user = {};

$scope.submit = function() {
alert('submit');
      $http({
              method: 'POST',
              url: '/users/signin',
              data: $scope.user
            })
            .then( function(response) {
               if(response.data.status === "SUCCESS") {
               $window.location.href = '/users/signup';
             }
             else {
               alert('error');
             }
            })
            .catch( function(response){

            })
            .finally( function() {

            });
}

});
