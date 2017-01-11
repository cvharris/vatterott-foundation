import loginFormComp from './loginFormComponent'
import userFactory from './User'
import encodeCreds from './encodeCreds'

module.exports = angular.module('loginForm', [])
  .component('loginForm', loginFormComp)
  .factory('User', userFactory)
  .factory('encodeCreds', encodeCreds)
