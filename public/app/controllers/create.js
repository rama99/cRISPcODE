var createCtrl = TicketApp.controller('createCtrl' , function($scope , $http) {
$scope.details = {};
$scope.details.assignedToUserID = '';
$scope.details.deptID = '';

$scope.GetTicketLookUps = function() {
  $http({
          method: 'GET',
          url: './getLookups'
        })
        .then( function(response) {

            response.data.users.unshift({
                   _id: '',
                   login: "Select a User"
               });

               response.data.projects.unshift({
                      _id: '',
                      projectName: "Select a Project"
                  });

            $scope.users = response.data.users;
            $scope.depts = response.data.projects;
        })
        .catch(function(err) {

        })
        .finally( function() {

        });

}

$scope.saveTicket = function() {
//alert('saveTicket');
  $http( {
          method: 'POST',
          url: './create',
          data: $scope.details
        })
  .then(function(response) {
    alert('success');
  })
  .catch( function(err) {

  })
  .finally( function() {

  });

}

 $scope.GetTicketLookUps();

});
