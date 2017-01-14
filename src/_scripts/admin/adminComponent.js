const adminComp = {
  templateUrl: 'admin/admin.html',
  controllerAs: 'adminCtrl',
  bindings: {
    applications: '<'
  },
  controller: /*@ngInject*/ function () {
    const ctrl = this

    ctrl.$onInit = function () {

    }
  }
}

module.exports = adminComp
