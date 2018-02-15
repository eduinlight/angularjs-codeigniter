angular.module('my-services').service('schoolsApiService',
  function(myHttpService) {
    return new class extends CrudClass {
      constructor() {
        super(myHttpService, "/schools")
      }
    }
  })