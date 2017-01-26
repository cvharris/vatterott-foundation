const userFactory = /*@ngInject*/ function ($resource, baseUrl, appResDecorator, $http) {
  return {
    getCurrentUser: function() {
      return $http({
        method: 'GET',
        url: `${baseUrl}/user`,
        transformResponse: appResDecorator
      })
    },
    login: function(data) {
      return $http({
        method: 'POST',
        url: `${baseUrl}/user/login`,
        data: data,
        transformResponse: appResDecorator
      })
    },
    logout: function() {
      return $http({
        method: 'POST',
        url: `${baseUrl}/user/logout`
      })
    },
    register: function(data) {
      return $http({
        method: 'POST',
        url: `${baseUrl}/user/new`,
        data: data,
        transformResponse: appResDecorator
      })
    }
  }
}

module.exports = userFactory
