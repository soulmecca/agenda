angular
  .module('app', [])
  .service("peopleService",function($window, $http, $q){
    var ctrl = this
    var url = "http://localhost:3000/api/people/";

    ctrl.create = function(name, phone) {
      var qCreate = $q.defer();

      

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

    ctrl.update = function(data) {
      var qUpdate = $q.defer();

      $http.patch(url + data.id, data)
        .then(function(res){
          console.log(res)
          qUpdate.resolve('success')
        }, function (error) {
          console.log(error)
          qUpdate.reject()
        })
        return qUpdate.promise;
    }

    return ctrl

})