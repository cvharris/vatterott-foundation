<template>
  <div>
    <div class="container">
      <h1 class="page-title">{{ title }}</h1>
      <p class="page-description">
        {{ description }}
      </p>
      <blockquote class="big-quote">
        <p>
          {{ blockquote }}
        </p>
        <footer>
          <cite class="author">{{ author }}</cite>
          <cite class="citation-title">{{ citation }}</cite>
        </footer>
      </blockquote>
      <section id="vfyb-about">
        <h2 class="page-section-header">{{ about }}</h2>
        <figure>
          <iframe
            src="https://player.vimeo.com/video/73003706"
            width="640"
            height="360"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
          <figcaption class="video-caption">
            {{ videocaption }}
          </figcaption>
        </figure>
        <p>
          {{ videodescription }}
        </p>
        <div class="figures">
          <div v-for="(figure, i) in figures" :key="i">
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
        <div v-html="html" />
      </section>
      <section id="vfyb-grantees">
        <h2 class="page-section-header">VFYB Previous Organizations</h2>
        <ul class="all-organizations">
          <li v-for="(org, i) in orgs" :key="i" class="organization">
            <a :href="org.link" class="organization-link" target="_blank">
              <h3 class="organization-name">{{ org.name }}</h3>
            </a>
          </li>
        </ul>
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
    const {
      title,
      orgs,
      figures,
      grants,
      description,
      blockquote,
      author,
      citation,
      about,
      videocaption,
      videodescription
    } = attributes
    return {
      title,
      orgs,
      figures,
      grants,
      description,
      blockquote,
      author,
      citation,
      about,
      videocaption,
      videodescription,
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
