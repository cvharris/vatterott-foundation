const userFactory = /*@ngInject*/ function ($resource, baseUrl, appReqAuthFactory, appResDecorator) {
  return function (customHeaders) {
    // TODO: Yeah...I screwed up making most of these GETs, thinking I didn't have SSL
    const methods = {
      getCurrentUser: {
        method: 'GET',
        headers: appReqAuthFactory(),
        transformResponse: appResDecorator
      },
      login: {
        url: `${baseUrl}/user/login`,
        method: 'POST',
        headers: customHeaders || {},
        transformResponse: appResDecorator
      },
      logout: {
        url: `${baseUrl}/user/logout`,
        headers: appReqAuthFactory(),
        method: 'POST'
      },
      register: {
        url: `${baseUrl}/user/new`,
        method: 'POST',
        headers: customHeaders || {},
        transformResponse: appResDecorator
      }
    }

    return $resource(`${baseUrl}/user`, {}, methods)
  }
}

module.exports = userFactory
