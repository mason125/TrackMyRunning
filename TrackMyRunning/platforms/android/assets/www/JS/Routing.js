/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

//only use angular for the routing
//module only one therefore leve it here 
const app = angular.module("unit", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    //main page
    .when("/", {
        template: ""
    })
    //enter data
    .when("/Enter", {
        templateUrl : "views/Enter.html"
    })
    //stats
    .when("/view",{
        templateUrl: "views/view.html"
    });
});