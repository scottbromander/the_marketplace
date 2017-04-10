var myApp = angular.module('myApp', []);

myApp.factory('DataService', ['$http', function($http){
    var messageObject = {
      messages : []
    };

    function getData(){
      $http.get('/messages').then(function(response){

      });
    }

    function postData(message){
      $http.post('/messages', message).then(function(response){

      });
    }

    return {
      messageObject : messageObject,
      getData  : getData,
      postData : postData
    };
}]);
