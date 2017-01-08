const loginComp = {
  templateUrl: 'loginForm/loginForm.html',
  controllerAs: 'loginForm',
  controller: function($resource) {
    const ctrl = this

    ctrl.$onInit = function() {
      ctrl.name = ', Nina!'

    }

    ctrl.apiStuff = $resource('/applications', {}, {})
  }
}

module.exports = loginComp
