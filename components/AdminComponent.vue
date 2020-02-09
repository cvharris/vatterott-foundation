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
        <thead>
          <tr class="grant-application header">
            <th class="org-col">Organization</th>
            <th class="contact-col">Contact Info</th>
            <th class="form-col">Application Form</th>
            <th class="proj-col">Project Budget</th>
            <th class="budget-col">Org Budget</th>
            <th class="irs-col">IRS Letter</th>
            <th class="update-col">Updated At</th>
            <th class="action-col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="applications.length === 0" class="grant-application">
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
                <span
                  class="file-button download"
                  @click="downloadFile(appl.applicationForm.fileName)"
                >
                  <i class="fa fa-download"></i>
                </span>
                <span
                  class="file-button trash secondary"
                  @click="deleteFile(appl.id, appl.applicationForm.fileName)"
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
                  @click="downloadFile(appl.projectBudget.fileName)"
                >
                  <i class="fa fa-download"></i>
                </span>
                <span
                  class="file-button trash secondary"
                  @click="deleteFile(appl.id, appl.projectBudget.fileName)"
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
                  @click="downloadFile(appl.orgBudget.fileName)"
                >
                  <i class="fa fa-download"></i>
                </span>
                <span
                  class="file-button trash secondary"
                  @click="deleteFile(appl.id, appl.orgBudget.fileName)"
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
                  @click="downloadFile(appl.irsLetter.fileName)"
                >
                  <i class="fa fa-download"></i>
                </span>
                <span
                  class="file-button trash secondary"
                  @click="deleteFile(appl.id, appl.irsLetter.fileName)"
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

export default {
  data() {
    return {
      waitingOnDownload: false,
      // showApplication: false,
      applications: [
        {
          company: '',
          contactName: '',
          contactPhone: '',
          applicationForm: { fileName: '' },
          id: '',
          projectBudget: { fileName: '' },
          orgBudget: { fileName: '' },
          irsLetter: { fileName: '' },
          updatedAt: new Date()
        }
      ]
    }
  },
  methods: {
    downloadFile() {},
    deleteFile() {},
    deleteApplication() {},
    logout() {}
  },
  components: {
    LogoutComponent
  }
}
</script>

<style>
</style>
