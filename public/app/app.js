var TicketApp = angular.module('TicketApp' , []);

var signUpCtrl = TicketApp.controller('signUpCtrl' , function($scope , $http) {

$scope.user = {};

$scope.signUp = function() {

try {

alert('signUp');

  $http({
          method: 'POST',
          url: '/users/SignUp',
          data: $scope.user
        }).success(function (responseData) {
                /* $scope.CompleteLoad();
                 $location.path("/OpenTickets"); */
                 alert('Saved');

        }).error(function (data, status, headers, config) {
              /*   HideBlock();
                 ngNotify.set("Server Error..", 'error'); */
        });

}
catch(e) {

}

}

});
