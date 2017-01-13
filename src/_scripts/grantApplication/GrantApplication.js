import _ from 'lodash'

const applicationsFactory = function ($resource, baseUrl, appReqAuthFactory, appResDecorator) {
  const methods = {
    getOne: {
      method: 'GET'
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
          if (data.hasOwnProperty(key)) {
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
