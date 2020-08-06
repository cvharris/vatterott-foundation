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
            {{ slogan }}
          </p>
          <a class="action-button" href="/applications">{{
            applybuttontext
          }}</a>
        </div>
      </div>
    </div>
    <div id="what-we-do" class="normal-section red-double-border">
      <div class="container">
        <h2 class="section-header">{{ focalareatitle }}</h2>
        <div class="do-boxes">
          <div id="education" class="do-box">
            <h3 class="do-header">{{ areatitleA }}</h3>
            <p class="do-description">
              {{ subfocalareaA }}
            </p>
          </div>
          <div id="sickness" class="do-box">
            <h3 v-html="areatitleB" class="do-header"></h3>
            <p class="do-description">
              {{ subfocalareaB }}
            </p>
          </div>
        </div>
        <a class="action-button" href="/who-we-help">{{ focalareabutton }}</a>
        <div class="do-boxes">
          <div id="welfare" class="do-box">
            <h3 v-html="areatitleC" class="do-header"></h3>
            <p class="do-description">
              {{ subfocalareaC }}
            </p>
          </div>
          <div id="religious" class="do-box">
            <h3 class="do-header">{{ areatitleD }}</h3>
            <p class="do-description">
              {{ subfocalareaD }}
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
        <h2 class="section-header">{{ missionstatementtitle }}</h2>
        <blockquote v-html="missionstatement" class="centered-quotations" />
        <a class="action-button" href="/trustees">{{ missionbutton }}</a>
      </div>
    </div>
    <div id="about" class="normal-section red-double-border">
      <div class="container">
        <h2 class="section-header">{{ historytitle }}</h2>
        <blockquote class="big-quote">
          <blockquote v-html="firsthistoryblockquote" />
          <footer>
            <cite class="author">{{ blockquoteauthor }}</cite>
            <cite class="citation-title">{{ blockquoteauthortitle }}</cite>
          </footer>
        </blockquote>
        <p class="home-text">
          {{ firsthistoryquote }}
        </p>
        <div class="picture-display">
          <div v-for="(figure, i) in figures" :key="i" class="figures">
            <figure>
              <img :src="figure.image" />
              <figcaption>{{ figure.caption }}</figcaption>
            </figure>
          </div>
        </div>
        <p class="home-text">
          {{ secondhistoryquoteA }}
          <a
            href="https://books.google.com/books?id=z5V9t5b79TwC&pg=PA140&lpg=PA140&dq=Catholic+Interracial+Council+of+St.+Louis&source=bl&ots=PErB57QUF5&sig=6B76hdc4df0Qa3KhAyNVLbPYPBU&hl=en&sa=X&ved=0ahUKEwjwxsbYrJ_QAhVTImMKHQN-CK8Q6AEIPTAH#v=onepage&q=Catholic%20Interracial%20Council%20of%20St.%20Louis&f=false"
            target="_blank"
            >{{ quotelinkA }}</a
          >
          {{ secondhistoryquoteB }}
        </p>
        <blockquote class="big-quote">
          <blockquote v-html="secondhistoryblockquote" />
          <footer>
            <cite class="author">{{ blockquoteauthor }}</cite>
            <cite class="citation-title">{{ blockquoteauthortitle }}</cite>
          </footer>
        </blockquote>
        <p class="home-text">
          {{ thirdhistoryquoteA }}
          <a
            href="http://archstl.org/archives/page/holy-angelsour-lady-angels-kinloch"
            target="_blank"
            >{{ quotelinkB }}</a
          >
          {{ thirdhistoryquoteB }}
        </p>
        <p class="home-text">
          {{ fourthhistoryquote }}
        </p>
      </div>
    </div>
    <div id="vfyb-link" class="transparent-section">
      <div class="parallax">
        <div id="vfyb-background" class="parallax-image"></div>
      </div>
      <div class="container">
        <h2 class="section-header">{{ vfybheader }}</h2>
        <p class="home-text">
          {{ vfybquoteA }}
        </p>
        <blockquote class="big-quote">
          <blockquote v-html="vfybblockquote" />
          <footer>
            <cite class="author">{{ blockquoteauthor }}</cite>
            <cite class="citation-title">{{ blockquoteauthortitle }}</cite>
          </footer>
        </blockquote>
        <p class="home-text">
          {{ vfybquoteB }}
        </p>
        <a class="action-button" href="/youth-board">{{ vfybbutton }}</a>
      </div>
    </div>
    <div id="grant-action" class="normal-section red-double-border">
      <div class="container">
        <h2 class="section-header">{{ applytitle }}</h2>
        <p class="home-text">{{ applytext }}</p>
        <a class="action-button" href="/applications">{{ applybutton }}</a>
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
    const {
      title,
      slogan,
      applybuttontext,
      focalareatitle,
      areatitleA,
      subfocalareaA,
      areatitleB,
      subfocalareaB,
      areatitleC,
      subfocalareaC,
      areatitleD,
      subfocalareaD,
      focalareabutton,
      missionstatementtitle,
      missionstatement,
      missionbutton,
      historytitle,
      firsthistoryblockquote,
      firsthistoryquote,
      blockquoteauthor,
      blockquoteauthortitle,
      figures,
      secondhistoryquoteA,
      quotelinkA,
      secondhistoryquoteB,
      secondhistoryblockquote,
      thirdhistoryquoteA,
      quotelinkB,
      thirdhistoryquoteB,
      fourthhistoryquote,
      vfybheader,
      vfybquoteA,
      vfybblockquote,
      vfybquoteB,
      vfybbutton,
      applytitle,
      applytext,
      applybutton
    } = attributes
    return {
      title,
      slogan,
      applybuttontext,
      focalareatitle,
      areatitleA,
      subfocalareaA,
      areatitleB: markdown(areatitleB),
      subfocalareaB,
      areatitleC: markdown(areatitleC),
      subfocalareaC,
      areatitleD,
      subfocalareaD,
      focalareabutton,
      missionstatementtitle,
      missionstatement: markdown(missionstatement),
      missionbutton,
      historytitle,
      firsthistoryblockquote: markdown(firsthistoryblockquote),
      firsthistoryquote,
      blockquoteauthor,
      blockquoteauthortitle,
      figures,
      secondhistoryquoteA,
      quotelinkA,
      secondhistoryquoteB,
      secondhistoryblockquote: markdown(secondhistoryblockquote),
      thirdhistoryquoteA,
      quotelinkB,
      thirdhistoryquoteB,
      fourthhistoryquote,
      vfybheader,
      vfybquoteA,
      vfybblockquote: markdown(vfybblockquote),
      vfybquoteB,
      vfybbutton,
      applytitle,
      applytext,
      applybutton,
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
