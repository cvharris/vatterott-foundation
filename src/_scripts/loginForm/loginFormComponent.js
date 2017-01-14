const loginComp = {
  templateUrl: 'loginForm/loginForm.html',
  controllerAs: 'loginForm',
  bindings: {
    isNewUser: '<'
  },
  controller: /*@ngInject*/ function(User, $state, encodeCreds, $timeout) {
    const ctrl = this

    ctrl.$onInit = function() {
      ctrl.type = ctrl.isNewUser ? 'Register' : 'Sign In'
      ctrl.resetFormMessages()
    }

    ctrl.submitCredentials = function() {
      ctrl.resetFormMessages()
      const auth = encodeCreds(ctrl.email, ctrl.authentication)
      ctrl.user = new User(auth)

      if (ctrl.isNewUser) {
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
        ctrl.user.login(data => {
          ctrl.messages.signedIn = true
          $timeout(() => {
            $state.go('grantApplication')
          }, 1500)
        }, error => {
          if (error.data.message === 'Incorrect password and e-mail!') {
            ctrl.messages.incorrectAuth = true
          }
        })
      }
    }

    ctrl.resetFormMessages = function() {
      ctrl.messages = {}
    }

    ctrl.changeFormType = function () {
      ctrl.isNewUser = !ctrl.isNewUser
      ctrl.type = ctrl.isNewUser ? 'Register' : 'Sign In'
    }
  }
}

module.exports = loginComp
