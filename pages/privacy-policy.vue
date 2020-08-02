<template>
  <div>
    <div class="container">
      <h1 class="page-title">{{ title }}</h1>
      <div v-html="html" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    // `attributes` is the object of YML Frontmatter data
    // `html` is the HTML version of the markdown body
    const { attributes, html } = await import(
      '~/assets/content/pages/privacy-policy.md'
    )
    const { title } = attributes
    return { title, html }
  }
}
</script>

<style></style>
