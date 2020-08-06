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
            <div v-if="incorrectAuth">
              <p><strong>Incorrect email and password</strong></p>
              <p>Please try again</p>
            </div>
          </div>

          <label for="email"> E-mail address </label>
          <input v-model="email" type="email" name="email" required />

          <label for="authentication">Password</label>
          <input
            v-model="authentication"
            type="password"
            name="authentication"
            required
          />

          <button @click="cancel" class="secondary">
            Cancel
          </button>
          <button class="primary" type="submit">{{ type }}</button>
        </fieldset>
      </form>
      <div class="form-footer">
        <div v-if="!isNewUser" class="login-switch">
          <p>Don't have an account?</p>
          <button @click="changeFormType" class="secondary">
            Register
          </button>
        </div>
        <div v-if="isNewUser" class="login-switch">
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
      isNewUser: false,
      emailTaken: false,
      registered: false,
      signedIn: false,
      incorrectAuth: false
    }
  },
  computed: {
    type() {
      return this.isNewUser ? 'Register' : 'Sign In'
    }
  },
  methods: {
    submitCredentials() {
      if (this.isNewUser) {
        this.$auth
          .createUserWithEmailAndPassword(this.email, this.authentication)
          .then(() => {
            this.registered = true
          })
          .catch((error) => {
            this.emailTaken = true
          })
      } else {
        this.$auth
          .signInWithEmailAndPassword(this.email, this.authentication)
          .then((data) => {
            this.signedIn = true
          })
          .catch((error) => {
            console.log(error)
            this.incorrectAuth = true
          })
      }
    },
    resetFormMessages() {},
    changeFormType() {
      this.isNewUser = !this.isNewUser
    },
    cancel() {}
  }
}
</script>

<style></style>
