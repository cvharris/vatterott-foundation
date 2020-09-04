<template>
  <div>
    <div id="top-splash" class="transparent-section">
      <div class="parallax">
        <div id="title-background" class="parallax-image"></div>
      </div>
      <div class="container">
        <div class="splash-container">
          <div class="image-container">
            <img
              alt="The Vatterott Foundation"
              title="The Vatterott Foundation logo"
              src="~/assets/images/VFlogo.png"
            />
          </div>
          <p class="slogan">
            {{ header.slogan }}
          </p>
          <a class="action-button" href="/applications">{{
            header.applybuttontext
          }}</a>
        </div>
      </div>
    </div>
    <div id="what-we-do" class="normal-section red-double-border">
      <div class="container">
        <h2 class="section-header">{{ focusareas.focalareatitle }}</h2>
        <div class="do-boxes">
          <div id="education" class="do-box">
            <h3 class="do-header">{{ focusareas.areatitleA }}</h3>
            <p class="do-description">
              {{ focusareas.subfocalareaA }}
            </p>
          </div>
          <div id="sickness" class="do-box">
            <h3 v-html="focusareas.areatitleB" class="do-header"></h3>
            <p class="do-description">
              {{ focusareas.subfocalareaB }}
            </p>
          </div>
        </div>
        <a class="action-button" href="/who-we-help">{{
          focusareas.focalareabutton
        }}</a>
        <div class="do-boxes">
          <div id="welfare" class="do-box">
            <h3 v-html="focusareas.areatitleC" class="do-header"></h3>
            <p class="do-description">
              {{ focusareas.subfocalareaC }}
            </p>
          </div>
          <div id="religious" class="do-box">
            <h3 class="do-header">{{ focusareas.areatitleD }}</h3>
            <p class="do-description">
              {{ focusareas.subfocalareaD }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="mission-statement" class="transparent-section">
      <div class="parallax">
        <div id="vatterott-family" class="parallax-image"></div>
      </div>
      <div class="container">
        <h2 class="section-header">{{ mission.missionstatementtitle }}</h2>
        <blockquote
          v-html="mission.missionstatement"
          class="centered-quotations"
        />
        <a class="action-button" href="/trustees">{{
          mission.missionbutton
        }}</a>
      </div>
    </div>
    <div id="about" class="normal-section red-double-border">
      <div class="container">
        <h2 class="section-header">{{ history.historytitle }}</h2>
        <blockquote class="big-quote">
          <blockquote v-html="history.firsthistoryblockquote" />
          <footer>
            <cite class="author">{{ history.blockquoteauthor }}</cite>
            <cite class="citation-title">{{
              history.blockquoteauthortitle
            }}</cite>
          </footer>
        </blockquote>
        <p class="home-text">
          {{ history.firsthistoryquote }}
        </p>
        <div class="picture-display">
          <div
            v-for="figure in history.figures"
            :key="figure.image"
            class="figures"
          >
            <figure>
              <img :src="figure.image" />
              <figcaption>{{ figure.caption }}</figcaption>
            </figure>
          </div>
        </div>
        <div>
          <p class="home-text">
            {{ history.secondhistoryquoteA }}
            <a
              href="https://books.google.com/books?id=z5V9t5b79TwC&pg=PA140&lpg=PA140&dq=Catholic+Interracial+Council+of+St.+Louis&source=bl&ots=PErB57QUF5&sig=6B76hdc4df0Qa3KhAyNVLbPYPBU&hl=en&sa=X&ved=0ahUKEwjwxsbYrJ_QAhVTImMKHQN-CK8Q6AEIPTAH#v=onepage&q=Catholic%20Interracial%20Council%20of%20St.%20Louis&f=false"
              target="_blank"
              >{{ history.quotelinkA }}</a
            >
            {{ history.secondhistoryquoteB }}
          </p>
        </div>
        <blockquote class="big-quote">
          <blockquote v-html="history.secondhistoryblockquote" />
          <footer>
            <cite class="author">{{ history.blockquoteauthor }}</cite>
            <cite class="citation-title">{{
              history.blockquoteauthortitle
            }}</cite>
          </footer>
        </blockquote>
        <p class="home-text">
          {{ history.thirdhistoryquoteA }}
          <a
            href="http://archstl.org/archives/page/holy-angelsour-lady-angels-kinloch"
            target="_blank"
            >{{ history.quotelinkB }}</a
          >
          {{ history.thirdhistoryquoteB }}
        </p>
        <p class="home-text">
          {{ history.fourthhistoryquote }}
        </p>
      </div>
    </div>
    <div id="vfyb-link" class="transparent-section">
      <div class="parallax">
        <div id="vfyb-background" class="parallax-image"></div>
      </div>
      <div class="container">
        <h2 class="section-header">{{ vfyb.vfybheader }}</h2>
        <p class="home-text">
          {{ vfyb.vfybquoteA }}
        </p>
        <blockquote class="big-quote">
          <blockquote v-html="vfyb.vfybblockquote" />
          <footer>
            <cite class="author">{{ vfyb.blockquoteauthor }}</cite>
            <cite class="citation-title">{{ vfyb.blockquoteauthortitle }}</cite>
          </footer>
        </blockquote>
        <p class="home-text">
          {{ vfyb.vfybquoteB }}
        </p>
        <a class="action-button" href="/youth-board">{{ vfyb.vfybbutton }}</a>
      </div>
    </div>
    <div id="grant-action" class="normal-section red-double-border">
      <div class="container">
        <h2 class="section-header">{{ apply.applytitle }}</h2>
        <p class="home-text">{{ apply.applytext }}</p>
        <a class="action-button" href="/applications">{{
          apply.applybutton
        }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import markdown from '~/plugins/markdown'

export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  },
  async asyncData() {
    // `attributes` is the object of YML Frontmatter data
    // `html` is the HTML version of the markdown body
    const { attributes, html } = await import('~/assets/content/pages/home.md')
    const { header, focusareas, mission, history, vfyb, apply } = attributes
    return {
      header,
      focusareas: {
        ...focusareas,
        areatitleB: markdown(focusareas.areatitleB),
        areatitleC: markdown(focusareas.areatitleC)
      },
      mission: {
        ...mission,
        missionstatement: markdown(mission.missionstatement)
      },
      history: {
        ...history,
        firsthistoryblockquote: markdown(history.firsthistoryblockquote),
        secondhistoryblockquote: markdown(history.secondhistoryblockquote)
      },
      vfyb: { ...vfyb, vfybblockquote: markdown(vfyb.vfybblockquote) },
      apply,
      html
    }
  }
}
</script>

<style lang="less" scoped>
@import '../assets/styles/shared/vars';

#vfyb-background {
  background-image: url(~assets/images/cousins.jpg);
}

#title-background {
  background-image: url(~assets/images/man-person-school-head.jpg);
}

#vatterott-family {
  background-image: url(~assets/images/vatterott-family.jpg);
}

.picture-display {
  display: flex;
  justify-content: space-around;
}

.home-text {
  font-size: 20px;
  margin-bottom: 2rem;

  @media (min-width: @tablet) {
    text-indent: 3rem;
  }
}
.container {
  padding: 2rem 1.5rem;
  max-width: 60rem;
  margin: 0 auto;

  @media (min-width: @tablet) {
    padding: @spacing-unit @spacing-unit * 1.5;
    max-width: @content-width;
  }
}
</style>
