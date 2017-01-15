import FileSaver from 'file-saver'

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

    ctrl.deleteFile = function(filename) {
      GrantApplication.removeFile({ appId: 1234, filename: filename }, res => {
        console.log('success!', res);
      }, err => {
        console.log('error!', err);
      })
    }

    ctrl.deleteApplication = function(applId) {
      GrantApplication.removeApplication({ appId: applId }, res => {
        console.log('success!', res);
      }, err => {
        console.log('error!', err);
      })

    }
  }
}

module.exports = adminComp
