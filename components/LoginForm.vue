<template>
  <div>
    <h1 class="page-title">{{ type }}</h1>
    <p>
      To apply for a grant or manage a previous application, please sign in or
      register for an account
    </p>
    <div class="centered-form">
      <form @submit.prevent="submitCredentials" name="credentialsForm">
        <fieldset>
          <div>
            <div v-if="emailTaken">
              <p><strong>That e-mail address is already taken.</strong></p>
              <p>
                Try
                <span @click="changeFormType" class="link-like"
                  >signing in</span
                >
                instead or registering with a different e-mail address.
              </p>
            </div>
            <div v-if="registered">
              <p><strong>Your registration was successful!</strong></p>
              <p>
                Redirecting you now...if you aren't redirected click
                <a href="/applications/new-application">here</a>
              </p>
            </div>
            <div v-if="signedIn">
              <p><strong>Signed in!</strong></p>
              <p>
                Redirecting you now...if you aren't redirected click
                <a href="/applications/new-application">here</a>
              </p>
            </div>
          </div>

          <label for="email"> E-mail address </label>
          <input v-model="email" type="email" name="email" required />

          <template v-if="!forgotPassword">
            <label for="authentication">Password</label>
            <input
              v-model="authentication"
              type="password"
              name="authentication"
              required
            />

            <p
              v-if="message"
              :class="
                isError
                  ? 'bg-red-400 border-red-600'
                  : 'bg-blue-400 border-blue-600'
              "
              class="mt-3 p-2  text-white font-regular border-2 rounded-md max-w-xs"
            >
              <i class="fa fa-exclamation-triangle" />
              <span class="pl-2">{{ message }}</span>
            </p>

            <button
              @click="clickedForgotPassword"
              type="button"
              class="link-like pl-0 underline hover:text-blue-600"
            >
              Forgot password?
            </button>
          </template>

          <div class="flex mt-2 items-center">
            <button @click="cancel" class="secondary">
              Cancel
            </button>
            <button class="primary" type="submit">{{ type }}</button>
            <div class="pl-2">
              <i v-if="waiting" class="fa fa-spinner fa-spin fa-lg" />
            </div>
          </div>
        </fieldset>
      </form>
      <div class="form-footer">
        <div v-if="!isNewUser" class="login-switch">
          <p>Don't have an account?</p>
          <button @click="changeFormType" class="secondary">
            Register
          </button>
        </div>
        <div v-else class="login-switch">
          <p>Already have an account?</p>
          <button @click="changeFormType" class="secondary">
            Sign In
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      authentication: '',
      message: '',
      isError: false,
      isNewUser: false,
      waiting: false,
      emailTaken: false,
      forgotPassword: false,
      registered: false,
      signedIn: false
    }
  },
  computed: {
    type() {
      return this.forgotPassword
        ? 'Send Password Reset'
        : this.isNewUser
        ? 'Register'
        : 'Sign In'
    }
  },
  methods: {
    async submitCredentials() {
      this.waiting = true
      this.isError = false
      this.message = ''
      if (this.forgotPassword) {
        return this.sendPasswordReset()
      } else if (this.isNewUser) {
        try {
          await this.$auth.createUserWithEmailAndPassword(
            this.email,
            this.authentication
          )
          this.registered = true
        } catch (error) {
          console.error(error)
          this.emailTaken = true
          this.isError = true
          this.message = error.message
        }
      } else {
        try {
          await this.$auth.signInWithEmailAndPassword(
            this.email,
            this.authentication
          )
          this.signedIn = true
        } catch (error) {
          console.log(error)
          this.isError = true
          this.message = error.message
        }
      }
      this.waiting = false
    },
    clickedForgotPassword() {
      this.message = ''
      this.forgotPassword = true
    },
    async sendPasswordReset() {
      this.waiting = true
      try {
        await this.$auth.sendPasswordResetEmail(this.email)
        this.message = 'Password reset email sent'
        this.emailTaken = false
        this.registered = false
        this.signedIn = false
        this.forgotPassword = false
      } catch (e) {
        console.error(e)
        this.isError = true
        this.message = e.message
      }
      this.waiting = false
    },
    resetFormMessages() {},
    changeFormType() {
      this.isNewUser = !this.isNewUser
    },
    cancel() {
      this.email = ''
      this.authentication = ''
      this.isNewUser = false
      this.emailTaken = false
      this.forgotPassword = false
      this.registered = false
      this.signedIn = false
    }
  }
}
</script>

<style scoped></style>
