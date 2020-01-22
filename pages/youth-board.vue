<template>
  <div>
    <div class="container">
      <h1 class="page-title">Vatterott Foundation Youth Board</h1>
      <p
        class="page-description"
      >In 2001 the Vatterott Foundation extended its tradition of giving by forming the Vatterott Foundation Youth Board (VFYB). The Youth Board is comprised of Vatterott descendants aged 13 to 30 who are interested in giving back to their community in the spirit of their ancestors.</p>
      <blockquote class="big-quote">
        <p>Youth leading and supporting change to improve human conditions, all for the greater glory of God!</p>
        <footer>
          <cite class="author">Mission Statement</cite>
          <cite class="citation-title">Vatterott Foundation Youth Board</cite>
        </footer>
      </blockquote>
      <section id="vfyb-about">
        <h2 class="page-section-header">About the VFYB</h2>
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
          <figcaption class="video-caption">Promo video by one of our very own: Stephen Greathouse</figcaption>
        </figure>
        <p>In the spirit of the original foundation, the VFYB takes a unique approach to their grant making. The VFYB focuses on three core aspects of charity: family, community and active participation.</p>
        <div class="figures">
          <figure>
            <img src="~assets/images/vfyb-hope-house.jpg" alt="VFYB Family" />
            <figcaption>
              <h3 class="figure-header">Family</h3>
              <p>With over 800 relatives, The Youth Board plays an important role in uniting young Vatterott cousins in the mission and values of their ancestors.</p>
            </figcaption>
          </figure>
          <figure>
            <img src="~assets/images/vfyb-elle-student.jpg" alt="VFYB Community" />
            <figcaption>
              <h3 class="figure-caption">Community</h3>
              <p>By working on service projects, VFYB members develop the skills and compassion to truly learn how their grants are helping the community. The VFYB members practicing youth philanthropy hold the promise that young people, working in partnership with adults, can lead to improved human conditions.</p>
            </figcaption>
          </figure>
          <figure>
            <img src="~assets/images/vfyb-jimmy-drew.jpg" alt="VFYB Action" />
            <figcaption>
              <h3 class="figure-caption">Action</h3>
              <p>Characteristic of their generation- young members of the Vatterott family dedicate their time in not only choosing and funding charities but also participate in service projects themselves.</p>
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="vfyb-grants">
        <h2 class="page-section-header">VFYB Grants</h2>
        <p
          class="section-description"
        >Similar to the Vatterott Foundation, every year the VFYB receives and reviews proposals; visits selected agencies and votes on the allocation of grant money.</p>
        <p
          class="section-description"
        >The Youth Board funds organizations working in the Foundation’s Focus Areas, based on specific goals and strategies outlined by the programs.</p>
        <h4 class="section-subheader">PLEASE NOTE:</h4>
        <p
          class="section-description"
        >All Vatterott Foundation Youth Board grant applications are issued by invitation only. Please do not send grant applications without solicitation from the VFYB. Application instructions will be included with the invitation.</p>
        <h4 class="section-subheader">DEADLINE INFORMATION</h4>
        <p class="section-description">
          All Vatterott Foundation Youth Board Applications must be submitted before
          <strong>April 7th, 2017.</strong> Funding decisions are made in June.
        </p>
      </section>
      <section id="vfyb-grantees">
        <h2 class="page-section-header">VFYB Previous Organizations</h2>
        <ul class="all-organizations">
          <li v-for="(org, i) in orgs" :key="i" class="organization">
            <a class="organization-link" :href="org.link" target="_blank">
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
  data() {
    return {
      orgs: [
        {
          name: 'Children’s Home Society',
          link: 'http://www.chsmo.org/'
        },
        {
          name: 'De La Salle Middle School',
          link: 'http://delasallems.org/'
        },
        {
          name: 'Food Outreach, Inc.',
          link: 'http://www.foodoutreach.org/'
        },
        {
          name: 'Good Shepherd Children & Family Services',
          link: 'https://www.facebook.com/goodshepherdstl'
        },
        {
          name: 'Griffin Center',
          link: 'http://www.griffincenter-esl.org/'
        },
        { name: 'Kids Under Twenty-One', link: 'http://www.kuto.org/' },
        {
          name: 'Our Little Haven',
          link: 'http://www.ourlittlehaven.org/'
        },
        {
          name: 'Sister Thea Bowman Catholic School',
          link: 'http://stbcs.com/wp/'
        },
        {
          name: 'Support Dogs, Inc.',
          link: 'http://www.supportdogs.org/'
        },
        {
          name: 'Access Academies',
          link: 'https://accessacademies.org'
        }
      ]
    }
  }
}
</script>

<style>
</style>