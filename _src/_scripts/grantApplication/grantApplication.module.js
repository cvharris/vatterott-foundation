import grantAppComp from './grantApplicationComponent'
import grantApplicationFactory from './GrantApplication'
import interceptorFactory from './interceptorFactory'
import appResDecorator from './appResDecorator'

module.exports = angular.module('grantApplication', [])
  .component('grantApplication', grantAppComp)
  .factory('GrantApplication', grantApplicationFactory)
  .factory('interceptorFactory', interceptorFactory)
  .factory('appResDecorator', appResDecorator)
