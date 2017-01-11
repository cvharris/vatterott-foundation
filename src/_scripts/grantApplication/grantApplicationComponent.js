const grantApp = {
  templateUrl: 'grantApplication/grantApplication.html',
  controllerAs: 'grantApp',
  bindings: {
    uploadedFiles: '<'
  },
  controller: function($resource) {
    const ctrl = this

    ctrl.$onInit = function() {

    }

  }
}
module.exports = grantApp
