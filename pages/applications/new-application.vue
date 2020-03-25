<template>
  <div>
    <template v-if="!initializing">
      <div v-if="!currentUserId">
        <login-form />
      </div>

      <div v-else>
        <div class="button-align">
          <div>
            <div v-if="showApplication">
              <grant-application>
                <button-toggle
                  :showApplication="showApplication"
                  @clicked-toggle-button="toggleView"
                />
              </grant-application>
            </div>
            <div v-if="!showApplication">
              <admin-component>
                <button-toggle
                  :showApplication="showApplication"
                  @clicked-toggle-button="toggleView"
                />
              </admin-component>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AdminComponent from '../../components/AdminComponent'
import GrantApplication from '../../components/GrantApplication'
import LoginForm from '../../components/LoginForm'
import ButtonToggle from '../../components/ButtonToggle'

export default {
  components: {
    AdminComponent,
    GrantApplication,
    LoginForm,
    ButtonToggle
  },
  data() {
    return {
      showApplication: true
    }
  },
  middleware: ['auth'],
  computed: { ...mapState(['initializing', 'currentUserId']) },
  methods: {
    toggleView() {
      this.showApplication = !this.showApplication
    }
  }
}
</script>

<style scoped></style>
