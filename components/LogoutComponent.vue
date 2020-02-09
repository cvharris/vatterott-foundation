<template>
  <span class="logout-button link-like" @click="logout">Logout</span>
</template>

<script>
export default {
  data() {
    return {
      logoutCtrl: { message: '' }
    }
  },
  methods: {
    logout() {
      this.$auth.signOut()
    }
  }
}
</script>

<style>
</style>