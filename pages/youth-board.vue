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
          <div v-for="(figure, i) in figures" :key="i" >
          <figure class="core-aspects">
            <div>
            <img :src="figure.image"/>
            <!-- <figcaption> -->
              <h3 id="text" >{{ figure.captiontitle }}</h3>
              <p class="main-caption">
               {{ figure.maincaption }}
              </p>
              </div>
            <!-- </figcaption> -->
            </figure>
          </div>
          <!-- <figure>
            <img
              src="~assets/images/vfyb-elle-student.jpg"
              alt="VFYB Community"
            />
            <figcaption>
              <h3 class="figure-caption">Community</h3>
              <p>
                By working on service projects, VFYB members develop the skills
                and compassion to truly learn how their grants are helping the
                community. The VFYB members practicing youth philanthropy hold
                the promise that young people, working in partnership with
                adults, can lead to improved human conditions.
              </p>
            </figcaption>
          </figure>
          <figure>
            <img src="~assets/images/vfyb-jimmy-drew.jpg" alt="VFYB Action" />
            <figcaption>
              <h3 class="figure-caption">Action</h3>
              <p>
                Characteristic of their generation- young members of the
                Vatterott family dedicate their time in not only choosing and
                funding charities but also participate in service projects
                themselves.
              </p>
            </figcaption>
          </figure> -->
        </div>
      </section>
      <section id="vfyb-grants">
        <h2 class="page-section-header">VFYB Grants</h2>
        <div v-for="(grant, i) in grants" :key="i">
          <h4>{{ grant.section}}</h4>
        <p class="section-description">
         {{ grant.grantdescription }}
        </p>
        </div>
        <!-- <p class="section-description">
          The Youth Board funds organizations working in the Foundation’s Focus
          Areas, based on specific goals and strategies outlined by the
          programs.
        </p>
        <h4 class="section-subheader">PLEASE NOTE:</h4>
        <p class="section-description">
          All Vatterott Foundation Youth Board grant applications are issued by
          invitation only. Please do not send grant applications without
          solicitation from the VFYB. Application instructions will be included
          with the invitation.
        </p>
        <h4 class="section-subheader">DEADLINE INFORMATION</h4>
        <p class="section-description">
          All Vatterott Foundation Youth Board Applications must be submitted
          before
          <strong>April 7th, 2017.</strong> Funding decisions are made in June.
        </p> -->
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
    const { title, orgs, figures, grants, description, blockquote, author, citation, about, videocaption, videodescription } = attributes
    return { title, orgs, figures, grants, description, blockquote, author, citation, about, videocaption, videodescription, html }
  }
}
</script>

<style scoped>

/* #text {
  font-weight: bold;
  font-size: x-large;
  text-align: center;
} */
img {
  width: 200px;
  height: 200px;
}
/* h3 p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
} */
.main-caption {
  text-align: center;
}
.core-aspects {
  width: 330px;
  height: 404px;
}
</style>
