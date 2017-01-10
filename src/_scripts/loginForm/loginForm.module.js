import loginFormComp from './loginFormComponent'
import authFactory from './Auth'

module.exports = angular.module('loginForm', [])
  .component('loginForm', loginFormComp)
  .factory('Auth', authFactory)
