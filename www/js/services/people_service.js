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
          qCreate.reject(error)
        })
      return qCreate.promise;
    } // this.create

    ctrl.update = function(data) {
      var qUpdate = $q.defer();
      $http.put(url + data.id, data)
        .then(function(res){
          console.log(res)
          qUpdate.resolve('success')
        }, function (error) {
          console.log(error)
          qUpdate.reject()
        })

        return qUpdate.promise;
    }

    ctrl.delete = function(id) {
      var qDelete = $q.defer();
      $http.delete(url + id)
        .then(function(res){
          console.log(res)
          qDelete.resolve('seccess')
        }, function(error) {
          console.log(error)
          qDelete.reject();
        })
        return qDelete.promise;
    }

    return ctrl

})