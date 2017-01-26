const logoutComp = {
  templateUrl: 'logout/logout.html',
  controllerAs: 'logoutCtrl',
  bindings: {
    user: '<'
  },
  controller: /*@ngInject*/ function($scope, User, $timeout, $state) {
    const ctrl = this

    ctrl.$onInit = function() {
      ctrl.message = "Logging you out now..."

      User.logout().then(res => {
        ctrl.message = "Logout successful, redirecting you to login..."
        $timeout(() => {
          $state.go('login')
        }, 1500)
      })
    }
  }
}

module.exports = logoutComp
