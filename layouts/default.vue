<template>
  <div class="main-container">
    <!-- TODO: SiteHeader -->
    <!-- TODO: SiteNav -->
    <main>
      <nuxt />
      <site-footer />
    </main>
  </div>
</template>

<script>
import SiteFooter from '../components/SiteFooter.vue'

export default {
  components: {
    SiteFooter
  }
}
</script>
