const appResDecorator = /*@ngInject*/ function (localStorageService, loginToken) {
  function decorate(data, headers, status) {
    if (!data) {
      return null
    }
    if (!headers) {
      return angular.fromJson(data)
    }
    const headerList = headers();
    if (headerList.authorization) {
      localStorageService.set(loginToken, headerList.authorization)
    }

    return angular.fromJson(data)
  }

  return decorate
}

module.exports = appResDecorator
