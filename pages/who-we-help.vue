<template>
  <div>
    <div class="container">
      <h1 class="page-title">{{ title }}</h1>
      <p class="page-description">{{ subtitle }}</p>
      <ul class="all-organizations">
        <li v-for="org in orgs" :key="org.link" class="organization">
          <a :href="org.link" class="organization-link" target="_blank">
            <h3 class="organization-name">{{ org.name }}</h3>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    // `attributes` is the object of YML Frontmatter data
    // `html` is the HTML version of the markdown body
    const sections = await import('~/assets/content/pages/who-we-help.md')
    const { title, subtitle, orgs } = sections.attributes
    return { title, subtitle, orgs }
  }
}
</script>

<style></style>
