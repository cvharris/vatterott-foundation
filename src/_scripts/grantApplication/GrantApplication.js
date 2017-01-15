import _ from 'lodash'

const applicationsFactory = /*@ngInject*/ function ($resource, baseUrl, appReqAuthFactory, appResDecorator) {
  const methods = {
    getOwn: {
      method: 'GET',
      url: `${baseUrl}/application/ownCurrent`,
      headers: appReqAuthFactory(),
      transformResponse: appResDecorator
    },
    query: {
      method: 'GET',
      headers: appReqAuthFactory(),
      transformResponse: appResDecorator,
      isArray: true
    },
    downloadFile: {
      method: 'GET',
      url: `${baseUrl}/application/:filename`,
      headers: appReqAuthFactory(),
      responseType: 'arraybuffer',
      transformResponse: (data, headersGetter) => {
        return {data: data, headers: headersGetter()}
      }
    },
    save: {
      method: 'POST',
      headers: _.assign(appReqAuthFactory(), {'Content-Type' : undefined}),
      transformRequest: data => {
        const payload = new FormData()

        for (let key in data) {
          if (data.hasOwnProperty(key) && !data[key].hasOwnProperty('uploaded')) {
            payload.append(key, data[key])
          }
        }
        return payload
      }
    },
    removeApplication: {
      method: 'DELETE',
      url: `${baseUrl}/application/:appId`,
      headers: appReqAuthFactory(),
      transformResponse: appResDecorator
    },
    removeFile: {
      method: 'DELETE',
      url: `${baseUrl}/application/:appId/file/:filename`,
      headers: appReqAuthFactory(),
      transformResponse: appResDecorator
    }
  }

  return $resource(`${baseUrl}/application`, {}, methods)
}

module.exports = applicationsFactory
