<template>
  <div>
    <template v-if="!initializing">
      <div v-if="!currentUserId">
        <login-form />
      </div>

      <div v-else>
        <div v-if="isAdmin" class="button-align">
          <button
            v-if="showApplication"
            @click="toggleView"
            class=" toggle-button link-like mt-5"
          >
            Admin Page
          </button>
        </div>
        <div class="button-align">
          <button
            v-if="!showApplication"
            @click="toggleView"
            class="toggle-button link-like mt-5"
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
import { mapState } from 'vuex'
import AdminComponent from '../../components/AdminComponent'
import GrantApplication from '../../components/GrantApplication'
import LoginForm from '../../components/LoginForm'

export default {
  components: {
    AdminComponent,
    GrantApplication,
    LoginForm
  },
  data() {
    return {
      showApplication: true
    }
  },
  middleware: ['auth'],
  computed: { ...mapState(['initializing', 'currentUserId', 'isAdmin']) },
  methods: {
    toggleView() {
      this.showApplication = !this.showApplication
    }
  }
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
}</style
>>
