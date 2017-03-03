'use strict';

var app = angular.module('myApp', []);

app.controller('MainContoller', ['$http', function ($http) {
  this.w = 123;
}]);