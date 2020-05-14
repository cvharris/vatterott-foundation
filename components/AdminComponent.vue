<template>
  <div class="container admin-page">
    <div class="align-header">
      <h1 class="page-title">
        Admin
      </h1>
      <slot />
    </div>
    <div class="section">
      <div v-if="waitingOnDownload" class="spinner-container">
        <div class="spinner">
          <i class="fa fa-pulse fa-spinner"></i>&nbsp;&nbsp;Downloading file...
        </div>
      </div>
      <table class="applications-list">
        <thead class="spacing align-body">
          <tr class="grant-application header">
            <th class="column">Organization</th>
            <th class="column">Contact Person</th>
            <th class="colum">Phone Number</th>
            <th class="column">Application Form</th>
            <th class="column">Project Budget</th>
            <th class="column">Org Budget</th>
            <th class="column">IRS Letter</th>
            <th class="column">Updated At</th>
            <th class="column">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-if="applications.length === 0"
            class="grant-application spacing align-body"
          >
            <td colspan="10">There are no applications to review!</td>
          </tr>
          <tr
            v-for="appl in applications"
            :key="appl.id"
            class="grant-application"
          >
            <td class="column">{{ appl.company }}</td>
            <td class="column">{{ appl.contactName }}</td>
            <!-- <div v-if="!!appl.contactName && !!appl.contactPhone"></div> -->
            <td class="column">{{ appl.contactPhone }}</td>
            <td class="column">
              <span v-show="!appl.applicationForm" class="no-link"></span>
              <div v-show="appl.applicationForm" class="file-actions">
                <div
                  @click="downloadFile(appl.applicationForm)"
                  class="file-button download"
                >
                  <i class="fa fa-download"></i>
                </div>
                <div
                  @click="
                    deleteFile(appl.id, appl.applicationForm, 'applicationForm')
                  "
                  class="file-button trash secondary"
                >
                  <i class="fa fa-trash"></i>
                </div>
              </div>
            </td>
            <td class="column">
              <span v-show="!appl.projectBudget" class="no-link"></span>
              <div v-show="appl.projectBudget" class="file-actions">
                <span
                  @click="downloadFile(appl.projectBudget)"
                  class="file-button download"
                >
                  <i class="fa fa-download"></i>
                </span>
                <span
                  @click="
                    deleteFile(appl.id, appl.projectBudget, 'projectBudget')
                  "
                  class="file-button trash secondary"
                >
                  <i class="fa fa-trash"></i>
                </span>
              </div>
            </td>
            <td class="column">
              <span v-show="!appl.orgBudget" class="no-link"></span>
              <div v-show="appl.orgBudget" class="file-actions">
                <span
                  @click="downloadFile(appl.orgBudget)"
                  class="file-button download"
                >
                  <i class="fa fa-download"></i>
                </span>
                <span
                  @click="deleteFile(appl.id, appl.orgBudget, 'orgBudget')"
                  class="file-button trash secondary"
                >
                  <i class="fa fa-trash"></i>
                </span>
              </div>
            </td>
            <td class="column">
              <span v-show="!appl.irsLetter" class="no-link"></span>
              <div v-show="appl.irsLetter" class="file-actions">
                <span
                  @click="downloadFile(appl.irsLetter)"
                  class="file-button download"
                >
                  <i class="fa fa-download"></i>
                </span>
                <span
                  @click="deleteFile(appl.id, appl.irsLetter, 'irsLetter')"
                  class="file-button trash secondary"
                >
                  <i class="fa fa-trash"></i>
                </span>
              </div>
            </td>
            <td class="column">
              {{ appl.updatedAt }}
            </td>
            <td class="column">
              <div class="file-actions">
                <span
                  @click="deleteApplication(appl.id)"
                  class="file-button trash secondary"
                >
                  <i class="fa fa-trash"></i>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { saveAs } from 'file-saver'

export default {
  data() {
    return {
      waitingOnDownload: false,
      applications: [
        {
          company: '',
          contactName: '',
          contactPhone: '',
          applicationForm: '',
          id: '',
          projectBudget: '',
          orgBudget: '',
          irsLetter: '',
          updatedAt: new Date()
        }
      ],
      unsubscribe: null
    }
  },
  mounted() {
    this.unsubscribe = this.$db.collection('uploadedForms').onSnapshot((formsSnapshot) => {
      this.applications = []
      formsSnapshot.forEach((doc) => {
        const form = { ...doc.data(), id: doc.id }
        this.applications.push(form)
      })
    })
  },
  beforeDestroy() {
    this.unsubscribe()
  },
  methods: {
    downloadFile(path) {
      this.$storage
        .ref(path)
        .getDownloadURL()
        .then((url) => {
          saveAs(url, this.getFileNameFromPath(path))
        })
    },
    async deleteFile(applicationId, path, field) {
      await this.$storage.ref(path).delete()
      await this.$db
        .collection('uploadedForms')
        .doc(applicationId)
        .update({
          [field]: ''
        })
    },
    async deleteApplication(applicationId) {
      const application = this.applications.find(
        ({ id }) => id === applicationId
      )
      console.log(applicationId, application)
      if (application.applicationForm !== '') {
        await this.deleteFile(
          applicationId,
          application.applicationForm,
          'applicationForm'
        )
      }
      if (application.projectBudget !== '') {
        await this.deleteFile(
          applicationId,
          application.projectBudget,
          'projectBudget'
        )
      }
      if (application.orgBudget !== '') {
        await this.deleteFile(applicationId, application.orgBudget, 'orgBudget')
      }
      if (application.irsLetter !== '') {
        await this.deleteFile(applicationId, application.irsLetter, 'irsLetter')
      }
      await this.$db
        .collection('uploadedForms')
        .doc(applicationId)
        .delete()
    },

    logout() {},
    getFileNameFromPath(path) {
      const editedName = path.split('/')
      return editedName[2]
    }
  }
}
</script>

<style>
.button-align {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.align-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.column {
  padding-right: 5px;
  padding-left: 5px;
  text-align: center;
}
</style>
