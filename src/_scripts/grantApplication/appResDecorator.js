function appResDecorator(localStorageService, loginToken) {
  function decorate(data, headers, status) {
    const headerList = headers();
    if (headerList.authorization) {
      localStorageService.set(loginToken, headerList.authorization)
    }

    return angular.fromJson(data)
  }

  return decorate
}

module.exports = appResDecorator
