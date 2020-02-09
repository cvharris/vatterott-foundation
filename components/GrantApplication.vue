<template>
  <div>
    <h1 class="page-title">
      New Application
      <logout-component />
    </h1>
    <p>
      You must upload all of these files before the deadline to submit a valid
      application, but you don't have to upload every file all at once.
    </p>
    <p>
      Upload one file now and come back before the deadline. We'll save your
      progress till you come back.
    </p>
    <form name="grantAppForm" @submit.prevent="onUploadForm">
      <label for="company"
        ><span class="required">Organization Name</span>
        <input
          type="text"
          name="company"
          v-model="currentApplication.company"
          required
          placeholder="ex. Non-Profits 'R Us"
        />
      </label>

      <label for="name"
        ><span class="required">Contact Name</span>
        <input
          type="text"
          name="contactName"
          v-model="currentApplication.contactName"
          required
          placeholder="ex. Charles Vatterott"
        />
      </label>

      <label for="phone"
        ><span class="required">Contact Phone #</span>
        <input
          type="text"
          name="contactPhone"
          v-model="currentApplication.contactPhone"
          required
          placeholder="ex. 314-222-2222"
        />
      </label>

      <fieldset>
        <legend class="section-description required">
          &nbsp;We ask that you submit the following documents (at least one at
          a time)&nbsp;&nbsp;&nbsp;
        </legend>

        <label for="application">
          <div>
            Application Form and Narrative Questions (<a
              href="/public/VF_Application_Form.docx"
              >download</a
            >)
          </div>
          <div class="uploaded" v-if="currentApplication.applicationForm">
            <i class="fa fa-check-square"></i>Uploaded!
          </div>
          <input
            id="application"
            :class="{
              'invisible-input': currentApplication.applicationForm
            }"
            :disabled="!!currentApplication.applicationForm"
            type="file"
            name="applicationForm"
            @change="onFileUpload($event, 'applicationForm')"
          />
        </label>

        <label for="project-budget">
          <div>
            Project Budget Template Form (<a
              href="/public/VF_Budget_Template_Form.xls"
              >download</a
            >)
          </div>
          <div class="uploaded" v-if="currentApplication.projectBudget">
            <i class="fa fa-check-square"></i>Uploaded!
          </div>
          <input
            id="project-budget"
            :class="{
              'invisible-input': currentApplication.projectBudget
            }"
            :disabled="!!currentApplication.projectBudget"
            type="file"
            name="projectBudget"
            @change="onFileUpload($event, 'projectBudget')"
          />
        </label>

        <label for="current-budget">
          <div>Current Organizational Budget</div>
          <div class="uploaded" v-if="currentApplication.orgBudget">
            <i class="fa fa-check-square"></i>Uploaded!
          </div>
          <input
            id="current-budget"
            :class="{
              'invisible-input': currentApplication.orgBudget
            }"
            :disabled="!!currentApplication.orgBudget"
            type="file"
            name="orgBudget"
            @change="onFileUpload($event, 'orgBudget')"
          />
        </label>

        <label for="irs-letter">
          <div>IRS Letter of Determination</div>
          <div class="uploaded" v-if="currentApplication.irsLetter">
            <i class="fa fa-check-square"></i>Uploaded!
          </div>
          <input
            id="irs-letter"
            :class="{
              'invisible-input': currentApplication.irsLetter
            }"
            :disabled="!!currentApplication.irsLetter"
            type="file"
            name="irsLetter"
            @change="onFileUpload($event, 'irsLetter')"
          />
        </label>
      </fieldset>
      <div>
        <div>
          <p v-if="unfinished"><strong>The form is not finished</strong></p>
          <p>Please fill in every field first before submitting</p>
        </div>
        <div v-if="needFile">
          <p><strong>You have to upload at least one file</strong></p>
          <p>Please upload at least one file</p>
        </div>
        <div v-if="uploading">
          <p>
            <i class="fa fa-spinner fa-pulse fa-2x"></i>Uploading...please wait
          </p>
        </div>
        <div v-if="completed">
          <p><strong>Application completed!</strong></p>
          <p>
            Thank you! You have finished uploading all required files. Our
            administrator will be in contact with you after reviewing the files.
            If you have any questions or concerns please e-mail
            info@vatterottfoundation.org.
          </p>
        </div>
      </div>
      <div class="form-actions">
        <button
          type="submit"
          class="primary"
          ng-disabled="grantApp.messages.completed"
        >
          Upload Files
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import LogoutComponent from './LogoutComponent'

export default {
  data() {
    return {
      user: { admin: false },
      currentApplication: {
        company: '',
        contactName: '',
        contactPhone: '',
        applicationForm: '',
        projectBudget: '',
        orgBudget: '',
        irsLetter: '',
        userId: ''
      },
      unfinished: false,
      needFile: false,
      uploading: false,
      uploaded: false,
      completed: false,
      showApplication: false,
      uploadedForm: '',
      applicationId: ''
    }
  },
  mounted: async function() {
    this.$db
      .collection('uploadedForms')
      .where('userId', '==', this.$auth.currentUser.uid)
      .onSnapshot((applicationSnapshot) => {
        console.log(applicationSnapshot)
        this.uploadedForm = ''
        if (!applicationSnapshot.empty) {
          applicationSnapshot.forEach((form) => {
            this.applicationId = form.id
            const application = form.data()
            this.currentApplication = application
          })
        } else {
          this.applicationId = this.$db.collection('uploadedForms').doc().id
        }
      })
  },
  methods: {
    $onInit() {},
    async onUploadForm() {
      this.currentApplication.userId = this.$auth.currentUser.uid
      await this.$db
        .collection('uploadedForms')
        .doc(this.applicationId)
        .set(this.currentApplication)
      this.uploaded = true
      this.uploadedForm = ''
      setTimeout(() => {
        this.uploaded = false
      }, 5000)
    },
    hasAtLeastOneUploadedFile() {},
    checkIfCompleted() {},
    resetFormMessages() {},
    logout() {},
    onFileUpload(event, whichDocument) {
      const files = event.target.files
      if (!files.length) return
      const file = files[0]
      const sampleFileName = `${this.$auth.currentUser.uid}/${this.applicationId}/${file.name}`
      this.currentApplication[whichDocument] = sampleFileName
      this.$storage
        .ref()
        .child(sampleFileName)
        .put(file)
        .then(function(snapshot) {
          console.log('Uploaded a blob or file!')
        })
    }
  },
  components: {
    LogoutComponent
  }
}
</script>

<style>
</style>