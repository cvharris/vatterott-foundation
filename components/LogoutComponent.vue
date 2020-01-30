<template>
  <div>
    <h1 class="page-title">Logout</h1>
    <p>{{ logoutCtrl.message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoutCtrl: { message: '' }
    }
  },
  methods: {
    logout() {}
  }
}
</script>

<style>
</style>