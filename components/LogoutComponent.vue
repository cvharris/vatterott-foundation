<template>
  <span @click="logout" class="link-like">Logout</span>
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

<style></style>
