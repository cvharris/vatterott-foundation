import grantAppComp from './grantApplicationComponent'
import grantApplicationFactory from './GrantApplication'
import appReqAuthFactory from './appReqAuthFactory'
import appResDecorator from './appResDecorator'

module.exports = angular.module('grantApplication', [])
  .component('grantApplication', grantAppComp)
  .factory('GrantApplication', grantApplicationFactory)
  .factory('appReqAuthFactory', appReqAuthFactory)
  .factory('appResDecorator', appResDecorator)
