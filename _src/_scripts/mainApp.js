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
import logout from './logout/logout.module'
import admin from './admin/admin.module'

const ngModule = angular.module('vf-app', [
  'ngResource',
  'ngMessages',
  'ui.router',
  'LocalStorageModule',
  'ngFileUpload',
  loginForm.name,
  grantApp.name,
  logout.name,
  admin.name
])

ngModule.config(/*@ngInject*/ function ($urlRouterProvider, $stateProvider) {
  $stateProvider.state('grantApplication', {
    url: '/',
    component: 'grantApplication',
    resolve: {
      user: function (localStorageService, loginToken, $state, User) {
        const token = localStorageService.get(loginToken);
        if (!token) {
          $state.go("login")
        }

        return User.getCurrentUser().then(res => {
          return res.data
        })
      },
      currentApplication: function (GrantApplication, $state, $q) {
        const deferred = $q.defer()

        GrantApplication.getOwn().then(res => {
          if (!res.data) {
            deferred.resolve({
              applicationForm: null,
              projectBudget: null,
              orgBudget: null,
              irsLetter: null
            })
          } else {
            deferred.resolve(res.data)
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
    component: 'logoutPage',
    resolve: {
      user: function (localStorageService, loginToken, $state, User) {
        const token = localStorageService.get(loginToken);
        if (!token) {
          $state.go("login")
        }

        return User.getCurrentUser().then( res => {
          return res.data
        })
      }
    }
  })

  $stateProvider.state('admin', {
    url: '/admin',
    component: 'adminPage',
    resolve: {
      applications: function (GrantApplication, $q, $state) {
        const deferred = $q.defer()

        GrantApplication.query().then(res => {
          deferred.resolve(res.data)
        }, error => {
          if (error.status === 401) {
            $state.go("login")
          }
        })

        return deferred.promise
      }
    }
  })

  $urlRouterProvider.otherwise('/')
})

ngModule.controller('MainCtrl', /*@ngInject*/ function($rootScope, $state) {
  const ctrl = this

  ctrl.$onInit = function() {

  }

  $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error) {
    // TODO: Handle 401 rejection/redirects from admin
    if(error === "Not Authorized") {
      $state.go("login")
    }
  })
})

ngModule.config(/*@ngInject*/ function (localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('vatterottFoundation')
})

ngModule.config(/*@ngInject*/ function ($httpProvider) {
  $httpProvider.interceptors.push('interceptorFactory')
})

ngModule.constant('baseUrl', '/api')
ngModule.constant('loginToken', 'login-token')
ngModule.constant('localUser', 'vfUser')