<template>
  <div>
    <div class="container">
      <h1 class="page-title">{{ titlesection.title }}</h1>
      <p class="page-description">
        {{ titlesection.description }}
      </p>
      <blockquote class="big-quote">
        <p>
          {{ titlesection.blockquote }}
        </p>
        <footer>
          <cite class="author">{{ titlesection.author }}</cite>
          <cite class="citation-title">{{ titlesection.citation }}</cite>
        </footer>
      </blockquote>
      <section id="vfyb-about">
        <h2 class="page-section-header">{{ aboutVFYB.about }}</h2>
        <figure>
          <iframe
            :src="aboutVFYB.videourl"
            width="640"
            height="360"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
          <figcaption class="video-caption">
            {{ aboutVFYB.videocaption }}
          </figcaption>
        </figure>
        <p>
          {{ figuresection.figuredescription }}
        </p>
        <div class="figures">
          <div
            v-for="figure in figuresection.figures"
            :key="figure.captiontitle"
          >
            <figure class="core-aspects">
              <div>
                <img :src="figure.image" />
                <h3 id="text">{{ figure.captiontitle }}</h3>
                <p class="main-caption">
                  {{ figure.maincaption }}
                </p>
              </div>
            </figure>
          </div>
        </div>
      </section>
      <section id="vfyb-grants">
        <div v-html="html">{{ body }}</div>
      </section>
      <section id="vfyb-grantees">
        <div>
          <h2 class="page-section-header">{{ organization.orgtitle }}</h2>
          <ul class="all-organizations">
            <li
              v-for="org in organization.orgs"
              :key="org.link"
              class="organization"
            >
              <a :href="org.link" class="organization-link" target="_blank">
                <h3 class="organization-name">{{ org.name }}</h3>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    // `attributes` is the object of YML Frontmatter data
    // `html` is the HTML version of the markdown body
    const { attributes, html } = await import(
      '~/assets/content/pages/youth-board.md'
    )
    console.log(attributes)
    const {
      titlesection,
      organization,
      aboutVFYB,
      figuresection,
      body
    } = attributes
    return {
      titlesection,
      organization,
      aboutVFYB,
      figuresection,
      body,
      html
    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}

.main-caption {
  text-align: center;
}
.core-aspects {
  width: 330px;
  height: 404px;
}
</style>
