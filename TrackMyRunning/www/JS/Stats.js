"use strict";

//ajax
angular.module('unit').controller('userCtrl', ['$scope', '$http', function ($scope, $http) {
    //pull data from DB
    let ID = sessionStorage.getItem("userID");
    $scope.click = function()
    {
      $scope.pull();  
    };
    
    $scope.pull = function(){
    $http.get('p.php',{params:{"choice": 1, "distance":" ", "loginUser":" ","loginPass":" ", "ID":ID}})
            .then(function successCallback(response) {
            // Store response data
            $scope.users = response.data;
            $scope.chart($scope.users);

    });
    };
    
    
    $scope.chart = function(array){
        //load distance column to array
        $scope.distance_array = $scope.users.map(e => parseFloat(e.DISTANCE));

        //format data 
        $scope.average_dist = ($scope.distance_array.reduce((total,num) => total + num)/$scope.distance_array.length).toFixed(2);
        $scope.sorted_array = $scope.distance_array.sort((a,b) => a-b);
        $scope.max = $scope.sorted_array[$scope.sorted_array.length-1];
        $scope.min = $scope.sorted_array[0];
    };
    
    //insert query
    $scope.in = () =>{
        let dist = $("#val").val();
        $http.get('p.php',{params:{"choice": 2, "distance":dist, "loginUser":" ","loginPass":" ", "ID":ID}})
               .then(function successCallback(response){
                    alert("Update Complete");
        });
    };
    
    
}]);
/*
   setTimeout(()=>{
    const TESTER = document.getElementById('chart');
    Plotly.plot( TESTER, [{
    x: [1, 2, 4, 8, 16] ,
    y: [1,2,232,422,1] }], {
    margin: { t: 0 } } );
},100);
});*/

