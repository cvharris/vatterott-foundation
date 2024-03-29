<template>
  <div class="align-body max-w-screen-md w-full">
    <div class="align-header">
      <h1 class="page-title">
        New Application
      </h1>
      <slot />
    </div>
    <div class="form-container w-full">
      <p>
        You must upload all of these files before the deadline to submit a valid
        application, but you don't have to upload every file all at once.
      </p>
      <p>
        Upload one file now and come back before the deadline. We'll save your
        progress till you come back.
      </p>
      <form @submit.prevent="onUploadForm" name="grantAppForm" class="w-full">
        <label for="company"
          ><span class="required">Organization Name</span>
          <input
            v-model="currentApplication.company"
            type="text"
            name="company"
            required
            placeholder="ex. Non-Profits 'R Us"
          />
        </label>

        <label for="name"
          ><span class="required">Contact Name</span>
          <input
            v-model="currentApplication.contactName"
            type="text"
            name="contactName"
            required
            placeholder="ex. Charles Vatterott"
          />
        </label>

        <label for="phone"
          ><span class="required">Contact Phone #</span>
          <input
            v-model="currentApplication.contactPhone"
            type="text"
            name="contactPhone"
            required
            placeholder="ex. 314-222-2222"
          />
        </label>

        <fieldset class="mt-4">
          <legend class="section-description required">
            We ask that you submit the following documents
          </legend>

          <label for="application">
            <div>
              Application Form and Narrative Questions (<a
                href="/public/VF_Application_Form.docx"
                >download</a
              >)
            </div>
            <div v-if="currentApplication.applicationForm" class="uploaded">
              <i class="fa fa-check-square"></i>Uploaded!
            </div>
            <input
              id="application"
              :class="{
                'invisible-input': currentApplication.applicationForm
              }"
              :disabled="!!currentApplication.applicationForm"
              @change="onFileUpload($event, 'applicationForm')"
              type="file"
              name="applicationForm"
            />
          </label>

          <label for="project-budget">
            <div>
              Project Budget Template Form (<a
                href="/public/VF_Budget_Template_Form.xls"
                >download</a
              >)
            </div>
            <div v-if="currentApplication.projectBudget" class="uploaded">
              <i class="fa fa-check-square"></i>Uploaded!
            </div>
            <input
              id="project-budget"
              :class="{
                'invisible-input': currentApplication.projectBudget
              }"
              :disabled="!!currentApplication.projectBudget"
              @change="onFileUpload($event, 'projectBudget')"
              type="file"
              name="projectBudget"
            />
          </label>

          <label for="current-budget">
            <div>Current Organizational Budget</div>
            <div v-if="currentApplication.orgBudget" class="uploaded">
              <i class="fa fa-check-square"></i>Uploaded!
            </div>
            <input
              id="current-budget"
              :class="{
                'invisible-input': currentApplication.orgBudget
              }"
              :disabled="!!currentApplication.orgBudget"
              @change="onFileUpload($event, 'orgBudget')"
              type="file"
              name="orgBudget"
            />
          </label>

          <label for="irs-letter">
            <div>IRS Letter of Determination</div>
            <div v-if="currentApplication.irsLetter" class="uploaded">
              <i class="fa fa-check-square"></i>Uploaded!
            </div>
            <input
              id="irs-letter"
              :class="{
                'invisible-input': currentApplication.irsLetter
              }"
              :disabled="!!currentApplication.irsLetter"
              @change="onFileUpload($event, 'irsLetter')"
              type="file"
              name="irsLetter"
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
              <i class="fa fa-spinner fa-pulse fa-2x"></i>Uploading...please
              wait
            </p>
          </div>
          <div v-if="completed">
            <p><strong>Application completed!</strong></p>
            <p
              class="p-2 bg-blue-400 text-white border-2 rounded-md border-blue-600"
            >
              <i class="fa fa-exclamation-triangle" />
              <span>
                Thank you! You have finished uploading all required files. Our
                administrator will be in contact with you after reviewing the
                files. If you have any questions or concerns please e-mail
                <a
                  class="link-like text-white hover:text-blue-900 underline"
                  href="mailto:info@vatterottfoundation.org"
                  >info@vatterottfoundation</a
                >.</span
              >
            </p>
          </div>
        </div>
        <div class="form-actions">
          <button type="submit" class="primary">
            Upload Files
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
      applicationId: '',
      unsubscribe: null
    }
  },
  computed: {
    ...mapState(['currentUserId'])
  },
  mounted() {
    this.unsubscribe = this.$db
      .collection('uploadedForms')
      .where('userId', '==', this.currentUserId)
      .onSnapshot(
        (applicationSnapshot) => {
          this.uploadedForm = ''
          if (!applicationSnapshot.empty) {
            // if the application snapshot is not empty, run this code
            applicationSnapshot.forEach((form) => {
              // set form.id to applicationId
              this.applicationId = form.id
              // creates new variable with the data, snapshot does not have automatically 'DocumentData'
              const application = form.data()
              // how we save the information to the current user
              this.currentApplication = application
            })
          } else {
            this.applicationId = this.$db.collection('uploadedForms').doc().id
          }
        },
        (error) => {
          console.log('Caught error listening for form updates', error)
          this.unsubscribe()
        }
      )
  },
  beforeDestroy() {
    this.unsubscribe()
  },
  methods: {
    async onUploadForm() {
      this.currentApplication.userId = this.currentUserId
      await this.$db
        .collection('uploadedForms')
        .doc(this.applicationId)
        .set({
          ...this.currentApplication,
          updatedAt: this.$firebase.firestore.Timestamp.now()
        })
      this.uploaded = true
      this.completed = true
      this.uploadedForm = ''
      setTimeout(() => {
        this.uploaded = false
      }, 5000)
    },
    hasAtLeastOneUploadedFile() {},
    checkIfCompleted() {},
    resetFormMessages() {},
    onFileUpload(event, whichDocument) {
      const files = event.target.files
      if (!files.length) return
      // name file variable
      const file = files[0]
      // create file path using object concatenation
      const sampleFileName = `${this.currentUserId}/${this.applicationId}/${file.name}`
      this.currentApplication[whichDocument] = sampleFileName
      this.$storage
        .ref()
        .child(sampleFileName)
        .put(file)
        .then((snapshot) => {
          this.onUploadForm()
          console.log('Uploaded a blob or file!')
        })
    }
  }
}
</script>

<style scoped>
.align-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.form-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10%;
}
</style>
