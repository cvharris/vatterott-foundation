<template>
  <div>
    <h1 class="page-title">{{ type }}</h1>
    <p>
      To apply for a grant or manage a previous application, please sign in or
      register for an account
    </p>
    <div class="centered-form">
      <form name="credentialsForm" @submit="submitCredentials">
        <fieldset>
          <div>
            <div v-if="emailTaken">
              <p><strong>That e-mail address is already taken.</strong></p>
              <p>
                Try
                <span class="link-like" @click="changeFormType"
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
          <input type="email" name="email" v-model="email" required />

          <label for="authentication">Password</label>
          <input
            type="password"
            name="authentication"
            v-model="authentication"
            required
          />

          <button class="secondary" @click="cancel">
            Cancel
          </button>
          <button class="primary" type="submit">{{ type }}</button>
        </fieldset>
      </form>
      <div class="form-footer">
        <div class="login-switch" v-if="isNewUser">
          <p>Don't have an account?</p>
          <button class="secondary" @click="changeFormType">
            Register
          </button>
        </div>
        <div class="login-switch" v-if="!isNewUser">
          <p>Already have an account?</p>
          <button class="secondary" @click="changeFormType">
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
      type: '',
      isNewUser: false,
      emailTaken: false,
      registered: false,
      signedIn: false,
      incorrectAuth: false
    }
  },
  methods: {
    $onInit() {},
    submitCredentials() {},
    resetFormMessages() {},
    changeFormType() {},
    cancel() {}
  }
}
</script>

<style>
</style>