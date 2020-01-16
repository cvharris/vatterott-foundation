<template>
  <div class="main-container">
    <site-header />
    <!-- TODO: SiteNav -->
    <main>
      <nuxt />
      <site-footer />
    </main>
  </div>
</template>

<script>
import SiteFooter from '../components/SiteFooter.vue'
import SiteHeader from '../components/SiteHeader.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>
