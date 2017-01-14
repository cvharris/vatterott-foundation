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
    removeFile: {
      method: 'DELETE'
    }
  }

  return $resource(`${baseUrl}/application/:applicationName`, {}, methods)
}

module.exports = applicationsFactory
