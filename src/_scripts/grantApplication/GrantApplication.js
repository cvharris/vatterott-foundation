const applicationsFactory = function ($resource, baseUrl, appReqAuthFactory, appResDecorator) {
  const methods = {
    getOne: {
      methods: 'GET'
    },
    query: {
      methods: 'GET',
      headers: appReqAuthFactory(),
      transformResponse: appResDecorator,
      isArray: true
    },
    uploadFiles: {
      methods: 'POST'
    },
    removeFile: {
      methods: 'DELETE'
    }
  }

  return $resource(`${baseUrl}/application/:applicationName`, {}, methods)
}

module.exports = applicationsFactory
