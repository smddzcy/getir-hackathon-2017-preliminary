'use strict';

var app = angular.module('myApp', [
  '720kb.datepicker'
]);

app.controller('MainContoller', ['$http', '$scope', function ($http, $scope) {
  this.send = () => {
    const endpoint = "https://getir-bitaksi-hackathon.herokuapp.com/getRecords";

    $http.post(endpoint, {
      startDate: this.startDate,
      endDate: this.endDate
    }).then((res) => {
      this.records = res.records;
      // TODO: Check records
    }).catch((err) => {
      console.log("Error:", err);
    });
  };

  // TODO: Error checking
  $scope.$watch(() => this.date, (v, old) => console.log(v));
}]);