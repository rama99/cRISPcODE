var createCtrl = TicketApp.controller('createCtrl' , function($scope , $http) {
$scope.details = {};
 $scope.details.assignedToUserID = '';
 
$scope.GetTicketLookUps = function() {
  $http({
          method: 'GET',
          url: './getLookups'
        })
        .then( function(response) {
            alert(response.data);
            response.data.unshift({
                   _id: '',
                   login: "Select a User"
               });

            $scope.users = response.data;
        })
        .catch(function() {

        })
        .finally( function() {

        });

}

 $scope.GetTicketLookUps();

});
