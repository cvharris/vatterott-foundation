<template>
  <div class="container">
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
            <th class="org-col">Organization</th>
            <th class="contact-col">Contact Info</th>
            <th class="form-col">Application Form</th>
            <th class="proj-col">Project Budget</th>
            <th class="budget-col">Org Budget</th>
            <th class="irs-col">IRS Letter</th>
            <th class="update-col">Updated At</th>
            <!-- <th class="action-col"></th> -->
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
            <td class="org-col">{{ appl.company }}</td>
            <td class="contact-col">
              {{ appl.contactName }} - {{ appl.contactPhone }}
            </td>
            <td class="form-col">
              <span v-show="!appl.applicationForm" class="no-link"></span>
              <div v-show="appl.applicationForm" class="file-actions">
                {{ getFileNameFromPath(appl.applicationForm) }}
                <span
                  @click="downloadFile(appl.applicationForm)"
                  class="file-button download"
                >
                  <i class="fa fa-download"></i>
                </span>
                <span
                  @click="
                    deleteFile(appl.id, appl.applicationForm, 'applicationForm')
                  "
                  class="file-button trash secondary"
                >
                  <i class="fa fa-trash"></i>
                </span>
              </div>
            </td>
            <td class="proj-col">
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
            <td class="budget-col">
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
            <td class="irs-col">
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
            <td class="update-col">
              {{ appl.updatedAt }}
            </td>
            <td class="action-col">
              <span
                @click="deleteApplication(appl.id)"
                class="file-button trash"
              >
                <i class="fa fa-trash"></i>
              </span>
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
      ]
    }
  },
  mounted() {
    this.$db.collection('uploadedForms').onSnapshot((formsSnapshot) => {
      this.applications = []
      formsSnapshot.forEach((doc) => {
        const form = { ...doc.data(), id: doc.id }
        this.applications.push(form)
      })
    })
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
      await this.$db
        .collection('uploadedForms')
        .doc(applicationId)
        .delete()
    },
    logout() {},
    getFileNameFromPath(path) {
      const editedName = path.split('/')
      // console.log(editedName)
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
</style>
