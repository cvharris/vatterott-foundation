const appReqAuthFactory = /*@ngInject*/ function(localStorageService, loginToken) {
  return {
    "Authorization": localStorageService.get(loginToken)
  }
}

module.exports = appReqAuthFactory
