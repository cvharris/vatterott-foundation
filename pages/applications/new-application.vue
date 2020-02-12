<template>
  <div>
    <template v-if="!initializing">
      <div v-if="!currentUserId">
        <login-form />
      </div>

      <div v-else>
        <div class="button-align">
          <button
            v-if="showApplication"
            class=" toggle-button link-like mt-5"
            @click="toggleView"
          >
            <!-- {{ showApplication ? 'Admin Page' : 'Grant Application' }} -->
            Admin Page
          </button>
        </div>
        <div class="button-align">
          <button
            v-if="!showApplication"
            class="toggle-button link-like mt-5"
            @click="toggleView"
          >
            Grant Application
          </button>
        </div>
        <div v-if="showApplication">
          <grant-application />
        </div>
        <div v-if="!showApplication">
          <admin-component />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import AdminComponent from '../../components/AdminComponent'
import GrantApplication from '../../components/GrantApplication'
import LoginForm from '../../components/LoginForm'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      showApplication: true
    }
  },
  middleware: ['auth'],
  components: {
    AdminComponent,
    GrantApplication,
    LoginForm
  },
  computed: { ...mapState(['initializing', 'currentUserId']) },
  methods: {
    toggleView() {
      this.showApplication = !this.showApplication
    }
  }

  // mounted() {
  //   setTimeout(() => {
  //     console.log(this.$auth.currentUser.uid)
  //   }, 1500)
  // }
}
</script>

<style scoped>
.toggle-button {
  /* box-sizing: border-box; */
  font-size: 1rem;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border: 1px solid #212121;
  border-radius: 6px;
}

.button-align {
  display: flex;
  justify-content: flex-end;
}
</style>>
