<template>
  <div>
    <div class="container">
      <h1 class="page-title">
        Admin
        <logout-component />
      </h1>
      <p>Hi Bill!</p>
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
          <tr class="grant-application" v-for="appl in applications">
            <td class="org-col">{{ appl.company }}</td>
            <td class="contact-col">
              {{ appl.contactName }} - {{ appl.contactPhone }}
            </td>
            <td class="form-col">
              <span class="no-link" v-show="!appl.applicationForm"></span>
              <div class="file-actions" v-show="appl.applicationForm">
                {{ getFileNameFromPath(appl.applicationForm) }}
                <span
                  class="file-button download"
                  @click="downloadFile(appl.applicationForm)"
                >
                  <i class="fa fa-download"></i>
                </span>
                <span
                  class="file-button trash secondary"
                  @click="
                    deleteFile(appl.id, appl.applicationForm, 'applicationForm')
                  "
                >
                  <i class="fa fa-trash"></i>
                </span>
              </div>
            </td>
            <td class="proj-col">
              <span class="no-link" v-show="!appl.projectBudget"></span>
              <div class="file-actions" v-show="appl.projectBudget">
                <span
                  class="file-button download"
                  @click="downloadFile(appl.projectBudget)"
                >
                  <i class="fa fa-download"></i>
                </span>
                <span
                  class="file-button trash secondary"
                  @click="
                    deleteFile(appl.id, appl.projectBudget, 'projectBudget')
                  "
                >
                  <i class="fa fa-trash"></i>
                </span>
              </div>
            </td>
            <td class="budget-col">
              <span class="no-link" v-show="!appl.orgBudget"></span>
              <div class="file-actions" v-show="appl.orgBudget">
                <span
                  class="file-button download"
                  @click="downloadFile(appl.orgBudget)"
                >
                  <i class="fa fa-download"></i>
                </span>
                <span
                  class="file-button trash secondary"
                  @click="deleteFile(appl.id, appl.orgBudget, 'orgBudget')"
                >
                  <i class="fa fa-trash"></i>
                </span>
              </div>
            </td>
            <td class="irs-col">
              <span class="no-link" v-show="!appl.irsLetter"></span>
              <div class="file-actions" v-show="appl.irsLetter">
                <span
                  class="file-button download"
                  @click="downloadFile(appl.irsLetter)"
                >
                  <i class="fa fa-download"></i>
                </span>
                <span
                  class="file-button trash secondary"
                  @click="deleteFile(appl.id, appl.irsLetter, 'irsLetter')"
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
                class="file-button trash"
                @click="deleteApplication(appl.id)"
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
import LogoutComponent from './LogoutComponent'
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
  mounted: async function() {
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
  },
  components: {
    LogoutComponent
  }
}
</script>

<style>
.align-body {
  padding-left: 12%;
  padding-right: 12%;
}
.spacing {
  display: flex;
  justify-content: space-around;
  padding-bottom: 5%;
}
button {
  margin-top: 2rem;
  margin-right: 9rem;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  outline: none;
  border-radius: 6px;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  padding: 0.5rem 1rem;
}
</style>
