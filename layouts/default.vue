<template>
  <div :class="sidebarVisible ? 'menuOpen' : ''" class="main-container">
    <site-header @menuToggle="toggleMenu" />
    <site-nav @menuToggle="toggleMenu" />
    <main>
      <nuxt />
      <site-footer />
    </main>
  </div>
</template>

<script>
import SiteFooter from '../components/SiteFooter.vue'
import SiteHeader from '../components/SiteHeader.vue'
import SiteNav from '../components/SiteNav'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    SiteNav
  },
  data() {
    return {
      sidebarVisible: false
    }
  },
  methods: {
    toggleMenu() {
      this.sidebarVisible = !this.sidebarVisible
    }
  }
}
</script>
