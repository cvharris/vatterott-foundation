<template>
  <div>
    <div class="container">
      <h1 class="page-title">{{ title }}</h1>
      <p class="page-description">
        {{ subtitle }}
      </p>
      <div class="trustees-list">
        <div v-for="trustee in trustees" :key="trustee.name" class="trustee">
          <div class="trustee-information">
            <div>
              <h3 class="trustee-name">{{ trustee }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="administrator">
      <h2>{{ administratortitle }}</h2>
      <div class="trustees-list">
        <div class="trustee">
          <div class="trustee-information">
            <h3 class="trustee-name">{{ administrator }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    // `attributes` is the object of YML Frontmatter data
    // `html` is the HTML version of the markdown body
    const sections = await import('~/assets/content/pages/trustees.md')
    const {
      title,
      subtitle,
      trustees,
      administratortitle,
      administrator
    } = sections.attributes
    return { title, subtitle, trustees, administratortitle, administrator }
  }
}
</script>

<style></style>
