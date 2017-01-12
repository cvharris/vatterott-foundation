const grantApp = {
  templateUrl: 'grantApplication/grantApplication.html',
  controllerAs: 'grantApp',
  bindings: {
    currentApplication: '<'
  },
  controller: function($scope, Upload) {
    const ctrl = this

    ctrl.$onInit = function() {

    }

    ctrl.uploadForm = function() {
      if ($scope.grantAppForm.$valid) {

      }
    }

  }
}
module.exports = grantApp
