<template>
  <div>
    <div class="container">
      <h1 class="page-title">Grants</h1>
      <p class="page-description">
        The Vatterott Foundation funds organizations working in its Focus Areas,
        based on specific goals and strategies outlined by the programs. Grants
        are awarded solely for charitable purposes. Trustees review applications
        quarterly. The Foundation accepts applications on a rolling/ ongoing
        basis. Deadlines for organizations to be are considered at the quarterly
        meetings: February 15, May 15, August 15, and November 15.
      </p>
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
      '~/assets/content/pages/grant-application.md'
    )
    const { title } = attributes
    return { title, html }
  }
}
</script>

<style></style>
