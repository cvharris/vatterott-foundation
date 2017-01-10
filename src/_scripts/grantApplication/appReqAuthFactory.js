function addReqAuthFactory(localStorageService, loginToken) {
  return function() {
    return {
      "Authorization": localStorageService.get(loginToken)
    }
  }
}

module.exports = addReqAuthFactory
