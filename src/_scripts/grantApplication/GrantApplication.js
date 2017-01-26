import _ from 'lodash'

const applicationsFactory = /*@ngInject*/ function ($resource, baseUrl, appResDecorator, $http) {
  return {
    getOwn: function() {
      return $http({
        method: 'GET',
        url: `${baseUrl}/application/ownCurrent`,
        transformResponse: appResDecorator
      })
    },
    query: function() {
      return $http({
        method: 'GET',
        transformResponse: appResDecorator,
        isArray: true
      })
    },
    downloadFile: function(params) {
      return $http({
        method: 'GET',
        url: `${baseUrl}/application/${params.filename}`,
        responseType: 'arraybuffer',
        transformResponse: (data, headersGetter) => {
          return {data: data, headers: headersGetter()}
        }
      })
    },
    save: function(data) {
      return $http({
        method: 'POST',
        url: `${baseUrl}/application`,
        data: data,
        headers: function() {
          return { 'Content-Type': undefined }
        },
        transformRequest: data => {
          const payload = new FormData()

          for (let key in data) {
            if (data.hasOwnProperty(key) && !data[key].hasOwnProperty('uploaded')) {
              payload.append(key, data[key])
            }
          }
          return payload
        }
      })
    },
    removeApplication: function(params) {
      return $http({
        method: 'DELETE',
        url: `${baseUrl}/application/${params.appId}`,
        transformResponse: appResDecorator
      })
    },
    removeFile: function(params) {
      return $http({
        method: 'DELETE',
        url: `${baseUrl}/application/${params.appId}/file/${params.filename}`,
        transformResponse: appResDecorator
      })
    }
  }
}

module.exports = applicationsFactory
