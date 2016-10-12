angular
  .module('app', [])
  .service("peopleService",function($window, $http, $q){
    var ctrl = this

    ctrl.create = function(name, phone) {
      var qCreate = $q.defer();

      var url = "http://localhost:3000/api/people";

      $http.post(url, {name: name, phone: phone})
        .then(function(res){
          console.log(res)
          qCreate.resolve('success')
        }, function (error) {
          console.log(error)
          qCreate.reject()
        })
      return qCreate.promise;
    } // this.create

    return ctrl

})