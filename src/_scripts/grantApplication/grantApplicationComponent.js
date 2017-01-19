const grantApp = {
  templateUrl: 'grantApplication/grantApplication.html',
  controllerAs: 'grantApp',
  bindings: {
    currentApplication: '<',
    user: '<'
  },
  controller: /*@ngInject*/ function ($scope) {
    const ctrl = this

    ctrl.$onInit = function() {
      ctrl.resetFormMessages()
    }

    ctrl.uploadForm = function() {
      if ($scope.grantAppForm.$invalid) {
        ctrl.messages.unfinished = true
        return
      }

      if (!hasAtLeastOneUploadedFile()) {
        ctrl.messages.needFile = true
        return
      }
      ctrl.currentApplication.$save()
    }

    function hasAtLeastOneUploadedFile() {
      if (
        ctrl.currentApplication.applicationForm ||
        ctrl.currentApplication.projectBudget ||
        ctrl.currentApplication.orgBudget ||
        ctrl.currentApplication.irsLetter) {
        return true
      }

      return false
    }

    ctrl.resetFormMessages = function() {
      ctrl.messages = {}
    }
  }
}
module.exports = grantApp
