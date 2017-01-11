const loginComp = {
  templateUrl: 'loginForm/loginForm.html',
  controllerAs: 'loginForm',
  bindings: {
    isNewUser: '<'
  },
  controller: function(localStorageService, loginToken, User, $state, encodeCreds, $timeout) {
    const ctrl = this

    ctrl.$onInit = function() {
      ctrl.type = ctrl.isNewUser ? 'Register' : 'Sign In'
      ctrl.messages = {}
    }

    ctrl.submitCredentials = function() {
      if (ctrl.isNewUser) {
        const auth = encodeCreds(ctrl.email, ctrl.authentication)
        ctrl.user = new User(auth)
        ctrl.user.register(data => {
          ctrl.messages.registered = true
          $timeout(() => {
            $state.go('grantApplication')
          }, 1500)
        }, error => {
          if (error.data.message === 'User with that e-mail already exists!') {
            ctrl.messages.emailTaken = true
          }
        })
      } else {
        User.login(creds, result => {
          console.log(result);
        })
      }
    }

    ctrl.resetFormMessages = function() {
      ctrl.messages = {}
    }

  }
}

module.exports = loginComp
