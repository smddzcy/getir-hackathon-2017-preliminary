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
    const endpoint = "https://getir-bitaksi-hackathon.herokuapp.com/getRecords";

    $http({
      url: endpoint,
      dataType: 'json',
      method: 'POST',
      data: {
        startDate: this.startDate,
        endDate: this.endDate
      },
      headers: { "Content-Type": "application/json" }
    }).then((res) => {
      this.records = res.records;
    }).catch((err) => {
      console.log("Error:", err);
    });
  };
}]);