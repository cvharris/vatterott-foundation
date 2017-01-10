function appResDecorator(localStorageService, loginToken) {
  function decorate(data, headers, status) {
    const headerList = headers();
    localStorageService.set(loginToken, headerList.authorization)
  }

  return decorate
}

module.exports = appResDecorator
