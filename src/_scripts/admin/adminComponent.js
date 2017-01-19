import FileSaver from 'file-saver'
import _ from 'lodash'

const adminComp = {
  templateUrl: 'admin/admin.html',
  controllerAs: 'adminCtrl',
  bindings: {
    applications: '<'
  },
  controller: /*@ngInject*/ function (GrantApplication, $window) {
    const ctrl = this

    ctrl.$onInit = function () {

    }

    ctrl.downloadFile = function(filename) {
      GrantApplication.downloadFile({ filename: filename }, (res, headers) => {
        const blob = new Blob([res.data], {type: headers()['content-type']});
        FileSaver.saveAs(blob, filename);
      }, err => {
        console.log('error!', err);
      })
    }

    ctrl.deleteFile = function(appId, filename) {
      GrantApplication.removeFile({ appId: appId, filename: filename }, res => {
        const appIndex = _.findIndex(ctrl.applications, it => it.id === appId)
        ctrl.applications[appIndex] = res
      }, err => {
        console.log('error!', err);
      })
    }

    ctrl.deleteApplication = function(applId) {
      GrantApplication.removeApplication({ appId: applId }, res => {
        const appIndex = _.findIndex(ctrl.applications, it => it.id === applId)
        ctrl.applications.splice(appIndex, 1)
      }, err => {
        console.log('error!', err);
      })

    }
  }
}

module.exports = adminComp
