import FileSaver from 'file-saver'
import _ from 'lodash'

const adminComp = {
  templateUrl: 'admin/admin.html',
  controllerAs: 'adminCtrl',
  bindings: {
    applications: '<'
  },
  controller: /*@ngInject*/ function (GrantApplication, $window, $state) {
    const ctrl = this

    ctrl.$onInit = function () {

    }

    ctrl.downloadFile = function(filename) {
      ctrl.waitingOnDownload = true
      GrantApplication.downloadFile({ filename: filename }).then(res => {
        const blob = new Blob([res.data.data], {type: res.data.headers['content-type']});
        FileSaver.saveAs(blob, filename);
        ctrl.waitingOnDownload = false
      }, err => {
        ctrl.waitingOnDownload = false
        console.error('error!', err);
      })
    }

    ctrl.deleteFile = function(appId, filename) {
      GrantApplication.removeFile({ appId: appId, filename: filename }).then(res => {
        const appIndex = _.findIndex(ctrl.applications, it => it.id === appId)
        ctrl.applications[appIndex] = res
      }, err => {
        console.error('error!', err);
      })
    }

    ctrl.deleteApplication = function(applId) {
      GrantApplication.removeApplication({ appId: applId }).then(res => {
        const appIndex = _.findIndex(ctrl.applications, it => it.id === applId)
        ctrl.applications.splice(appIndex, 1)
      }, err => {
        console.error('error!', err);
      })

    }

    ctrl.logout = function() {
      $state.go('logout')
    }
  }
}

module.exports = adminComp
