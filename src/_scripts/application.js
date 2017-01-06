'use strict'

import angular from 'angular'

const ngModule = angular.module('vf-app', [])

ngModule.component('loginForm', {
  templateUrl: 'loginForm/loginForm.html',
  controllerAs: 'loginForm',
  controller: function() {
    const ctrl = this

    ctrl.name = ', Charlie Harris'
  }
})
