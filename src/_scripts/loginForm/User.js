const userFactory = /*@ngInject*/ function ($resource, baseUrl, appReqAuthFactory, appResDecorator) {
  const methods = {
    getCurrentUser: {
      method: 'GET',
      headers: appReqAuthFactory,
      transformResponse: appResDecorator
    },
    login: {
      url: `${baseUrl}/user/login`,
      method: 'POST',
      transformResponse: appResDecorator
    },
    logout: {
      url: `${baseUrl}/user/logout`,
      headers: appReqAuthFactory,
      method: 'POST'
    },
    register: {
      url: `${baseUrl}/user/new`,
      method: 'POST',
      transformResponse: appResDecorator
    }
  }

  return $resource(`${baseUrl}/user`, {}, methods)
}

module.exports = userFactory
