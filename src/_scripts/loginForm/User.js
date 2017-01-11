const userFactory = function ($resource, baseUrl, appReqAuthFactory, appResDecorator, encodeCreds) {
  return function (customHeaders) {
    const methods = {
      getCurrentUser: {
        methods: 'GET',
        headers: appReqAuthFactory(),
        transformResponse: appResDecorator
      },
      login: {
        url: `${baseUrl}/user/login`,
        methods: 'POST',
        headers: customHeaders || {}
      },
      logout: {
        url: `${baseUrl}/user/logout`,
        methods: 'POST'
      },
      register: {
        url: `${baseUrl}/user/new`,
        methods: 'GET',
        headers: customHeaders || {},
        transformResponse: appResDecorator
      }
    }

    return $resource(`${baseUrl}/user`, {}, methods)
  }
}

module.exports = userFactory
