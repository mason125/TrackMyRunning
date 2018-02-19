/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

//module only one therefore leve it here 
angular.module("unit", ["ngRoute"]);

//routing
angular.module('unit').config(function($routeProvider) {
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