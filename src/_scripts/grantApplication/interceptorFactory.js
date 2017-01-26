const interceptorFactory = /*@ngInject*/ function(localStorageService, loginToken) {
  return {
    'request': function(config) {
      config.headers['Authorization'] = localStorageService.get(loginToken)
      return config
    }
  }
}

module.exports = interceptorFactory
