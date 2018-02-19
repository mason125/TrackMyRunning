
"use strict";

//ajax
angular.module('unit').controller('userCtrl', ['$scope', '$http', function ($scope, $http) {
        //select query
    $scope.out = () =>{
        //put " " padding for select query
        $http.get('p.php',{params:{"choice": 1, "distance":" "}}).then(function successCallback(response) {
            // Store response data
            $scope.users = response.data;
        });
    };
    
    //insert query
    $scope.in = () =>{
        let dist = $("#val").val();
        $http.get('p.php',{params:{"choice": 2, "distance":dist}}).then(function successCallback(response){
               alert("Update Complete");
        });
    };
}]);
/*
$("#stats").on('click',() =>{   
   // arry = [];
   $.post("p.php", {option:"2"}).done(function(data){
       document.getElementById("table").innerHTML = data;
       
   });
   
   setTimeout(()=>{
    const TESTER = document.getElementById('chart');
    Plotly.plot( TESTER, [{
    x: [1, 2, 4, 8, 16] ,
    y: [1,2,232,422,1] }], {
    margin: { t: 0 } } );
},100);
});*/


//chart
