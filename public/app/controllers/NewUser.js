var signUpCtrl = TicketApp.controller('signUpCtrl' , function($scope , $http) {

$scope.user = {};

$scope.signUp = function() {

try {

  $http({
          method: 'POST',
          url: '/users/SignUp',
          data: $scope.user
        })
      .then( function(response) {
          alert('SAVED');
      })
      .catch( function(response) {
         alert('FAILED');
      })
      .finally( function() {
        alert('FINALLY');
      });

}
catch(e) {

}

}

});
