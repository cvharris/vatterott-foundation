<template>
  <div>
    <div>
      <h3>Admin Component</h3>
      <admin-component />
    </div>

    <div>
      <h3>Grant Application</h3>
      <grant-application />
    </div>

    <div>
      <h3>Login Form</h3>
      <login-form />
    </div>

    <div>
      <h3>Logout Component</h3>
      <logout-component />
    </div>
  </div>
</template>

<script>
import AdminComponent from '../../components/AdminComponent'
import GrantApplication from '../../components/GrantApplication'
import LoginForm from '../../components/LoginForm'
import LogoutComponent from '../../components/LogoutComponent'

export default {
  components: {
    AdminComponent,
    GrantApplication,
    LoginForm,
    LogoutComponent
  },
  mounted() {
    setTimeout(() => {
      console.log(this.$auth.currentUser.uid)
    }, 1500)
  }
}
</script>

<style>
</style>