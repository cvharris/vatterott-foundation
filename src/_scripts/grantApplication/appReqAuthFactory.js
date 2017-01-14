const appReqAuthFactory = /*@ngInject*/ function(localStorageService, loginToken) {
  return function() {
    return {
      "Authorization": localStorageService.get(loginToken)
    }
  }
}

module.exports = appReqAuthFactory
