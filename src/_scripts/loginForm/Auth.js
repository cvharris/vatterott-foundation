const authFactory = function ($resource, baseUrl) {
  function authBuilder (path, params, overrides) {
    const methods = {
      login: {
        methods: 'POST'
      },
      logout: {
        url: `${baseUrl}/logout`,
        methods: 'POST'
      },
      register: {
        url: `${baseUrl}/register`,
        methods: 'POST'
      }
    }

    console.log('derp!');

    return $resource(`${baseUrl}/login`, params, _.assign(methods, overrides))
  }
  return authBuilder
}

module.exports = authFactory
