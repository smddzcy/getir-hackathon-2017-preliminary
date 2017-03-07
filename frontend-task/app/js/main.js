'use strict';

var app = angular.module('myApp', [
  '720kb.datepicker'
]);

app.run(function ($http) {
  // Sends this header with any AJAX request
  $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  // Send this header only in post requests. Specifies you are sending a JSON object
  $http.defaults.headers.post['dataType'] = 'json'
});

app.controller('MainContoller', ['$http', '$scope', function ($http, $scope) {
  this.send = () => {
    const recordEndpoint = "https://getir-bitaksi-hackathon.herokuapp.com/getRecords";

    $http.post(recordEndpoint, {
      startDate: this.startDate,
      endDate: this.endDate
    }).then((res) => {
      this.records = res.data.records;
    }).catch((err) => {
      console.log("Error:", err);
    });
  };
}]);
