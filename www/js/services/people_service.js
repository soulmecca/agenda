angular
  .module('app', [])
  .service("peopleService",function($window, $http){

    this.create = function(name, phone) {
      var url = "http://localhost:3000/api/people";
      return $http({
                method: 'POST',
                url: url,
                headers: {
                  'dataType': 'json', 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                data: {
                  name: name,
                  phone: phone
                }
      });
    };

})