'use strict'

// Import third-party libraries
import angular from 'angular'
import ngResource from 'angular-resource'
import ngMessages from 'angular-messages'
import uiRouter from 'angular-ui-router'
import ngLocalStorage from 'angular-local-storage'
import ngFileUpload from 'ng-file-upload'

// Import other modules
import loginForm from './loginForm/loginForm.module'
import grantApp from './grantApplication/grantApplication.module'

const ngModule = angular.module('vf-app', [
  'ngResource',
  'ngMessages',
  'ui.router',
  'LocalStorageModule',
  'ngFileUpload',
  loginForm.name,
  grantApp.name
])

ngModule.config(function ($urlRouterProvider, $stateProvider) {
  $stateProvider.state('grantApplication', {
    url: '/',
    component: 'grantApplication',
    resolve: {
      user: function (localStorageService, loginToken, $state, User) {
        const token = localStorageService.get(loginToken);
        if (!token) {
          $state.go("login")
        }

        return User().getCurrentUser()
      },
      currentApplication: function (GrantApplication, $state, $q) {
        const deferred = $q.defer()

        GrantApplication.getOne((data) => {
          if (data.length === 0) {
            deferred.resolve(new GrantApplication)
          } else {
            deferred.resolve(data)
          }
        }, (error) => {
          if (error.status === 401) {
            $state.go("login")
          }
        })

        return deferred.promise
      }
    }
  })

  $stateProvider.state('login', {
    url: '/login',
    component: 'loginForm',
    resolve: {
      isNewUser: function (localStorageService, loginToken) {
        return !localStorageService.get(loginToken)
      }
    }
  })

  $stateProvider.state('logout', {
    url: '/logout',
    component: 'logoutPage'
  })

  $urlRouterProvider.otherwise('/login')
})

ngModule.controller('MainCtrl', function($rootScope, $state) {
  const ctrl = this

  ctrl.$onInit = function() {

  }

  $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error) {
    if(error === "Not Authorized") {
      $state.go("login")
    }
  })
})

ngModule.config((localStorageServiceProvider) => {
  localStorageServiceProvider.setPrefix('vatterottFoundation')
})

ngModule.constant('baseUrl', '/api')
ngModule.constant('loginToken', 'login-token')
ngModule.constant('localUser', 'vfUser')
