const encodeCreds = /*@ngInject*/ function ($window) {
  return function(username, password) {
    const authString = $window.btoa(`${username}:${password}`)
    return {
      "Authorization": `Basic ${authString}`
    }
  }
}

module.exports = encodeCreds
