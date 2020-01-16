const grantApp = {
  templateUrl: 'grantApplication/grantApplication.html',
  controllerAs: 'grantApp',
  bindings: {
    currentApplication: '<',
    user: '<'
  },
  controller: /*@ngInject*/ function ($scope, $state, GrantApplication) {
    const ctrl = this

    ctrl.$onInit = function() {
      ctrl.resetFormMessages()
      checkIfCompleted()
      ctrl.lockFields = ctrl.currentApplication.hasOwnProperty('company')
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
      ctrl.messages.uploading = true
      GrantApplication.save(ctrl.currentApplication).then(res => {
        ctrl.messages.uploading = undefined
        ctrl.lockFields = true
        ctrl.currentApplication = res.data
      })
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

    function checkIfCompleted() {
      if ((ctrl.currentApplication.applicationForm && ctrl.currentApplication.applicationForm.uploaded) && (ctrl.currentApplication.projectBudget && ctrl.currentApplication.projectBudget.uploaded) && (ctrl.currentApplication.orgBudget && ctrl.currentApplication.orgBudget.uploaded) && (ctrl.currentApplication.irsLetter && ctrl.currentApplication.irsLetter.uploaded)) {
        ctrl.messages.completed = true
        return
      }

      ctrl.messages.completed = undefined
      return
    }

    ctrl.goToAdmin = function() {
      $state.go('admin')
    }

    ctrl.resetFormMessages = function() {
      ctrl.messages = {}
    }

    ctrl.logout = function() {
      $state.go('logout')
    }
  }
}
module.exports = grantApp