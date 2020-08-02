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
            <h3 class="do-header">
              {{ areatitleB }}
            </h3>
            <p class="do-description">
              {{ subfocalareaB }}
            </p>
          </div>
        </div>
        <a class="action-button" href="/who-we-help">{{ focalareabutton }}</a>
        <div class="do-boxes">
          <div id="welfare" class="do-box">
            <h3 class="do-header">
              {{ areatitleC }}
            </h3>
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
        <blockquote class="centered-quotations">
          <p>{{ missionstatementA }}
          <strong>{{ missionstatementboldA }}</strong>
          {{ missionstatementB }}
          <strong>{{ missionstatementboldB }}</strong>
          {{ missionstatementC }}
          <strong>{{ missionstatementboldC }}</strong>
          {{ missionstatementD }}
          <strong>{{ missionstatementboldD }}</strong>
          {{ missionstatementE }}
          </p>
        </blockquote>
        <a class="action-button" href="/trustees">{{ missionbutton }}</a>
      </div>
    </div>
    <div id="about" class="normal-section red-double-border">
      <div class="container">
        <h2 class="section-header">{{ historytitle }}</h2>
        <blockquote class="big-quote">
          <p>
            {{ firsthistoryblockquoteA }}
            <strong>{{ firsthistoryblockquoteboldA }}</strong>
            {{ firsthistoryblockquoteB }}
            <strong>{{ firsthistoryblockquoteboldB }}</strong>
            {{ firsthistoryblockquoteC }}
            <strong>{{ firsthistoryblockquoteboldC }}</strong>
            {{ firsthistoryblockquoteD }}
          </p>
          <footer>
            <cite class="author">{{ blockquoteauthor }}</cite>
            <cite class="citation-title">{{ blockquoteauthortitle }}</cite>
          </footer>
        </blockquote>
        <p class="home-text">
          {{ firsthistoryquote }}
        </p>
        <div class="picture-display">
          <div class="figures" v-for="(figure, i) in figures" :key="i">
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
          <p>
            {{ secondhistoryblockquoteA }}
            <strong>{{ secondhistoryblockquoteboldA }}</strong>
            {{ secondhistoryblockquoteB }}
          </p>
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
          <p>
            {{ vfybblockquoteA }}
            <strong>{{ vfybblockquoteboldA }}</strong>
            {{ vfybblockquoteB }}
            <strong>{{ vfybblockquoteboldB }}</strong>
            {{ vfybblockquoteC }}
            <strong>{{ vfybblockquoteboldC }}</strong>
          </p>
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
      missionstatementA,
      missionstatementboldA,
      missionstatementB,
      missionstatementboldB,
      missionstatementC,
      missionstatementboldC,
      missionstatementD,
      missionstatementboldD,
      missionstatementE,
      missionbutton,
      historytitle,
      firsthistoryblockquoteA,
      firsthistoryblockquoteboldA,
      firsthistoryblockquoteB,
      firsthistoryblockquoteboldB,
      firsthistoryblockquoteC,
      firsthistoryblockquoteboldC,
      firsthistoryblockquoteD,
      firsthistoryquote,
      blockquoteauthor,
      blockquoteauthortitle,
      figures,
      secondhistoryquoteA,
      quotelinkA,
      secondhistoryquoteB,
      secondhistoryblockquoteA,
      secondhistoryblockquoteboldA,
      secondhistoryblockquoteB,
      thirdhistoryquoteA,
      quotelinkB,
      thirdhistoryquoteB,
      fourthhistoryquote,
      vfybheader,
      vfybquoteA,
      vfybblockquoteA,
      vfybblockquoteboldA,
      vfybblockquoteB,
      vfybblockquoteboldB,
      vfybblockquoteC,
      vfybblockquoteboldC,
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
      areatitleB,
      subfocalareaB,
      areatitleC,
      subfocalareaC,
      areatitleD,
      subfocalareaD,
      focalareabutton,
      missionstatementtitle,
      missionstatementA,
      missionstatementboldA,
      missionstatementB,
      missionstatementboldB,
      missionstatementC,
      missionstatementboldC,
      missionstatementD,
      missionstatementboldD,
      missionstatementE,
      missionbutton,
      historytitle,
      firsthistoryblockquoteA,
      firsthistoryblockquoteboldA,
      firsthistoryblockquoteB,
      firsthistoryblockquoteboldB,
      firsthistoryblockquoteC,
      firsthistoryblockquoteboldC,
      firsthistoryblockquoteD,
      firsthistoryquote,
      blockquoteauthor,
      blockquoteauthortitle,
      figures,
      secondhistoryquoteA,
      quotelinkA,
      secondhistoryquoteB,
      secondhistoryblockquoteA,
      secondhistoryblockquoteboldA,
      secondhistoryblockquoteB,
      thirdhistoryquoteA,
      quotelinkB,
      thirdhistoryquoteB,
      fourthhistoryquote,
      vfybheader,
      vfybquoteA,
      vfybblockquoteA,
      vfybblockquoteboldA,
      vfybblockquoteB,
      vfybblockquoteboldB,
      vfybblockquoteC,
      vfybblockquoteboldC,
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
// .do-boxes {
//   display: block;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   border-radius: 1rem;
//   padding: 1rem 0;

//   @media (min-width: @tablet) {
//     padding: 3rem 0;
//   }
// }

// .do-box {
//   position: relative;
//   z-index: 1;
//   color: white;
//   flex: 1 0 100vw;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 3rem 1rem;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;

//   &::after {
//     content: '';
//     position: absolute;
//     display: block;
//     left: 0;
//     top: 0;
//     height: 100%;
//     width: 100%;
//     background: black;
//     opacity: 0.5;
//     z-index: -1;
//   }

//   @media (min-width: @tablet) {
//     padding: 2rem;
//     margin: 1rem;
//     flex: 1 0 275px;
//   }
// }

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
